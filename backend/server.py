from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(
    title="Allgau Media API",
    description="Backend API for Allgau Media website",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    phone: Optional[str] = None
    company: Optional[str] = None
    service_interest: Optional[str] = None
    is_read: bool = False
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
    phone: Optional[str] = None
    company: Optional[str] = None
    service_interest: Optional[str] = None

class ContactMessageUpdate(BaseModel):
    is_read: Optional[bool] = None

# Portfolio Item Model
class PortfolioItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    title_en: str
    description: str
    description_en: str
    category: str
    thumbnail: str
    video_url: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Routes
@api_router.get("/")
async def root():
    return {"message": "Allgau Media API", "status": "running"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input: ContactMessageCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contacts", response_model=List[ContactMessage])
async def get_contacts(is_read: Optional[bool] = None):
    query = {}
    if is_read is not None:
        query['is_read'] = is_read
    
    contacts = await db.contacts.find(query, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact.get('timestamp'), str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contacts

@api_router.get("/contacts/{contact_id}", response_model=ContactMessage)
async def get_contact(contact_id: str):
    contact = await db.contacts.find_one({"id": contact_id}, {"_id": 0})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    if isinstance(contact.get('timestamp'), str):
        contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contact

@api_router.patch("/contacts/{contact_id}", response_model=ContactMessage)
async def update_contact(contact_id: str, update: ContactMessageUpdate):
    update_dict = {k: v for k, v in update.model_dump().items() if v is not None}
    
    if not update_dict:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    result = await db.contacts.update_one(
        {"id": contact_id},
        {"$set": update_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    contact = await db.contacts.find_one({"id": contact_id}, {"_id": 0})
    if isinstance(contact.get('timestamp'), str):
        contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contact

@api_router.delete("/contacts/{contact_id}")
async def delete_contact(contact_id: str):
    result = await db.contacts.delete_one({"id": contact_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return {"message": "Contact deleted successfully", "id": contact_id}

@api_router.get("/contacts/stats/summary")
async def get_contact_stats():
    total = await db.contacts.count_documents({})
    unread = await db.contacts.count_documents({"is_read": False})
    
    return {
        "total": total,
        "unread": unread,
        "read": total - unread
    }

# Portfolio Endpoints
@api_router.get("/portfolio", response_model=List[PortfolioItem])
async def get_portfolio(category: Optional[str] = None):
    query = {}
    if category and category != "all":
        query['category'] = category
    
    items = await db.portfolio.find(query, {"_id": 0}).sort("created_at", -1).to_list(100)
    
    for item in items:
        if isinstance(item.get('created_at'), str):
            item['created_at'] = datetime.fromisoformat(item['created_at'])
    
    return items

# Seed portfolio data on startup
@app.on_event("startup")
async def seed_portfolio():
    count = await db.portfolio.count_documents({})
    if count == 0:
        portfolio_items = [
            {
                "id": str(uuid.uuid4()),
                "title": "Fitness Studio Werbefilm",
                "title_en": "Fitness Studio Commercial",
                "description": "Dynamischer Werbespot für ein lokales Fitnessstudio in Memmingen",
                "description_en": "Dynamic commercial for a local fitness studio in Memmingen",
                "category": "fitness",
                "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/3201508/3201508-hd_1920_1080_24fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Auto Detailing",
                "title_en": "Car Detailing",
                "description": "Professionelle Autopflege und Detailing Services",
                "description_en": "Professional car care and detailing services",
                "category": "business",
                "thumbnail": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/5548426/5548426-hd_1920_1080_30fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Social Media Kampagne",
                "title_en": "Social Media Campaign",
                "description": "Kreative Social Media Videos für Instagram und TikTok",
                "description_en": "Creative social media videos for Instagram and TikTok",
                "category": "social-media",
                "thumbnail": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/6981411/6981411-hd_1920_1080_25fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Nagelstudio Promotion",
                "title_en": "Nail Salon Promotion",
                "description": "Elegante Präsentation eines Nagelstudios",
                "description_en": "Elegant presentation of a nail salon",
                "category": "business",
                "thumbnail": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/7670845/7670845-hd_1920_1080_25fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Friseursalon Imagefilm",
                "title_en": "Hair Salon Image Film",
                "description": "Moderner Imagefilm für einen Friseursalon",
                "description_en": "Modern image film for a hair salon",
                "category": "fitness",
                "thumbnail": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/3997822/3997822-hd_1920_1080_25fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Restaurant Werbung",
                "title_en": "Restaurant Advertisement",
                "description": "Appetitanregende Videos für ein Restaurant im Allgäu",
                "description_en": "Appetizing videos for a restaurant in the Allgäu region",
                "category": "social-media",
                "thumbnail": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
                "video_url": "https://videos.pexels.com/video-files/3298572/3298572-hd_1920_1080_30fps.mp4",
                "created_at": datetime.now(timezone.utc).isoformat()
            }
        ]
        await db.portfolio.insert_many(portfolio_items)
        logging.info("Portfolio data seeded successfully")

# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
