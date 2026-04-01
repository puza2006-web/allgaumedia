import requests
import sys
import json
from datetime import datetime

class AllgauMediaAPITester:
    def __init__(self, base_url="https://allgau-media-preview.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.created_contact_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if response.text and response.status_code < 500 else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_endpoints(self):
        """Test basic health endpoints"""
        print("\n=== Testing Health Endpoints ===")
        
        # Test root endpoint
        self.run_test("Root API", "GET", "api/", 200)
        
        # Test health check
        self.run_test("Health Check", "GET", "api/health", 200)

    def test_portfolio_endpoints(self):
        """Test portfolio endpoints"""
        print("\n=== Testing Portfolio Endpoints ===")
        
        # Test get all portfolio items
        success, response = self.run_test("Get All Portfolio", "GET", "api/portfolio", 200)
        
        if success and response:
            portfolio_items = response
            print(f"   Found {len(portfolio_items)} portfolio items")
            
            # Test category filtering
            categories = ['fitness', 'business', 'social-media']
            for category in categories:
                self.run_test(f"Get Portfolio - {category}", "GET", "api/portfolio", 200, 
                            params={'category': category})

    def test_contact_endpoints(self):
        """Test contact form and management endpoints"""
        print("\n=== Testing Contact Endpoints ===")
        
        # Test contact form submission
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+49123456789",
            "company": "Test Company",
            "service_interest": "videoproduction",
            "message": "This is a test message for API testing."
        }
        
        success, response = self.run_test("Create Contact", "POST", "api/contact", 200, data=contact_data)
        
        if success and response:
            self.created_contact_id = response.get('id')
            print(f"   Created contact with ID: {self.created_contact_id}")
            
            # Test get all contacts
            self.run_test("Get All Contacts", "GET", "api/contacts", 200)
            
            # Test get contact by ID
            if self.created_contact_id:
                self.run_test("Get Contact by ID", "GET", f"api/contacts/{self.created_contact_id}", 200)
                
                # Test update contact (mark as read)
                update_data = {"is_read": True}
                self.run_test("Update Contact", "PATCH", f"api/contacts/{self.created_contact_id}", 200, data=update_data)
                
                # Test get contacts with filter
                self.run_test("Get Unread Contacts", "GET", "api/contacts", 200, params={'is_read': False})
                self.run_test("Get Read Contacts", "GET", "api/contacts", 200, params={'is_read': True})

    def test_contact_stats(self):
        """Test contact statistics endpoint"""
        print("\n=== Testing Contact Stats ===")
        
        success, response = self.run_test("Get Contact Stats", "GET", "api/contacts/stats/summary", 200)
        
        if success and response:
            required_fields = ['total', 'unread', 'read']
            for field in required_fields:
                if field in response:
                    print(f"   {field}: {response[field]}")
                else:
                    print(f"❌ Missing field in stats: {field}")

    def test_contact_deletion(self):
        """Test contact deletion (cleanup)"""
        print("\n=== Testing Contact Deletion ===")
        
        if self.created_contact_id:
            self.run_test("Delete Contact", "DELETE", f"api/contacts/{self.created_contact_id}", 200)
            
            # Verify deletion
            self.run_test("Verify Deletion", "GET", f"api/contacts/{self.created_contact_id}", 404)

    def test_error_handling(self):
        """Test error handling"""
        print("\n=== Testing Error Handling ===")
        
        # Test invalid contact creation
        invalid_data = {"name": "Test", "email": "invalid-email"}
        self.run_test("Invalid Email", "POST", "api/contact", 422, data=invalid_data)
        
        # Test non-existent contact
        self.run_test("Non-existent Contact", "GET", "api/contacts/non-existent-id", 404)
        
        # Test invalid portfolio category
        self.run_test("Invalid Category", "GET", "api/portfolio", 200, params={'category': 'invalid'})

def main():
    print("🚀 Starting Allgau Media API Tests")
    print("=" * 50)
    
    # Setup
    tester = AllgauMediaAPITester()
    
    # Run all tests
    try:
        tester.test_health_endpoints()
        tester.test_portfolio_endpoints()
        tester.test_contact_endpoints()
        tester.test_contact_stats()
        tester.test_contact_deletion()
        tester.test_error_handling()
        
    except Exception as e:
        print(f"\n❌ Test suite failed with error: {str(e)}")
        return 1
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())