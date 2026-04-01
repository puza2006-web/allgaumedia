import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Trash2, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AdminPage = () => {
  const { t } = useLanguage();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, statsRes] = await Promise.all([
        axios.get(`${API_URL}/api/contacts`),
        axios.get(`${API_URL}/api/contacts/stats/summary`)
      ]);
      setContacts(contactsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id, currentStatus) => {
    try {
      await axios.patch(`${API_URL}/api/contacts/${id}`, {
        is_read: !currentStatus
      });
      fetchData();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/contacts/${id}`);
      fetchData();
      setSelectedContact(null);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Allgau Media</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-[#050505] pt-24 pb-12" data-testid="admin-page">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 
                className="text-3xl md:text-4xl font-medium text-white mb-2"
                data-testid="admin-title"
              >
                {t('admin.title')}
              </h1>
              <p className="text-zinc-400">{t('admin.contacts')}</p>
            </div>
            <button
              onClick={fetchData}
              className="mt-4 md:mt-0 btn-secondary inline-flex items-center space-x-2"
              data-testid="admin-refresh-button"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div 
              className="bg-zinc-950 border border-white/10 p-6"
              data-testid="admin-stat-total"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider">{t('admin.total')}</p>
                  <p className="text-3xl font-light text-white mt-1">{stats.total}</p>
                </div>
                <Mail className="w-8 h-8 text-zinc-600" />
              </div>
            </div>
            <div 
              className="bg-zinc-950 border border-white/10 p-6"
              data-testid="admin-stat-unread"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider">{t('admin.unread')}</p>
                  <p className="text-3xl font-light text-white mt-1">{stats.unread}</p>
                </div>
                <EyeOff className="w-8 h-8 text-zinc-600" />
              </div>
            </div>
            <div 
              className="bg-zinc-950 border border-white/10 p-6"
              data-testid="admin-stat-read"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider">{t('admin.read')}</p>
                  <p className="text-3xl font-light text-white mt-1">{stats.read}</p>
                </div>
                <Eye className="w-8 h-8 text-zinc-600" />
              </div>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="bg-zinc-950 border border-white/10 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-zinc-400">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
                <p>Loading...</p>
              </div>
            ) : contacts.length === 0 ? (
              <div className="p-12 text-center text-zinc-400" data-testid="admin-no-contacts">
                <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{t('admin.noContacts')}</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-zinc-400">Status</TableHead>
                    <TableHead className="text-zinc-400">Name</TableHead>
                    <TableHead className="text-zinc-400">Email</TableHead>
                    <TableHead className="text-zinc-400">Service</TableHead>
                    <TableHead className="text-zinc-400">Datum</TableHead>
                    <TableHead className="text-zinc-400 text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow 
                      key={contact.id} 
                      className={`border-white/10 hover:bg-white/5 cursor-pointer ${
                        !contact.is_read ? 'bg-white/5' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                      data-testid={`admin-contact-row-${contact.id}`}
                    >
                      <TableCell>
                        <div className={`w-2 h-2 rounded-full ${contact.is_read ? 'bg-zinc-600' : 'bg-blue-500'}`} />
                      </TableCell>
                      <TableCell className="text-white font-medium">{contact.name}</TableCell>
                      <TableCell className="text-zinc-400">{contact.email}</TableCell>
                      <TableCell className="text-zinc-400">{contact.service_interest || '-'}</TableCell>
                      <TableCell className="text-zinc-500 text-sm">{formatDate(contact.timestamp)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkAsRead(contact.id, contact.is_read);
                            }}
                            className="p-2 hover:bg-white/10 transition-colors"
                            title={t('admin.markRead')}
                            data-testid={`admin-toggle-read-${contact.id}`}
                          >
                            {contact.is_read ? (
                              <EyeOff className="w-4 h-4 text-zinc-400" />
                            ) : (
                              <Eye className="w-4 h-4 text-zinc-400" />
                            )}
                          </button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 hover:bg-red-500/20 transition-colors"
                                title={t('admin.delete')}
                                data-testid={`admin-delete-${contact.id}`}
                              >
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-zinc-900 border-white/10">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-white">{t('admin.delete')}</AlertDialogTitle>
                                <AlertDialogDescription className="text-zinc-400">
                                  {t('admin.confirmDelete')}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-zinc-800 text-white border-white/10 hover:bg-zinc-700">
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(contact.id)}
                                  className="bg-red-600 text-white hover:bg-red-700"
                                  data-testid="admin-confirm-delete"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>

          {/* Contact Detail Modal */}
          {selectedContact && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedContact(null)}
            >
              <div 
                className="bg-zinc-900 border border-white/10 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                data-testid="admin-contact-detail"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">{selectedContact.name}</h3>
                    <p className="text-zinc-400">{selectedContact.email}</p>
                  </div>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="text-zinc-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedContact.phone && (
                    <div>
                      <p className="text-zinc-500 text-sm">Telefon</p>
                      <p className="text-white">{selectedContact.phone}</p>
                    </div>
                  )}
                  {selectedContact.company && (
                    <div>
                      <p className="text-zinc-500 text-sm">Unternehmen</p>
                      <p className="text-white">{selectedContact.company}</p>
                    </div>
                  )}
                  {selectedContact.service_interest && (
                    <div>
                      <p className="text-zinc-500 text-sm">Service</p>
                      <p className="text-white capitalize">{selectedContact.service_interest}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-zinc-500 text-sm">Nachricht</p>
                    <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Datum</p>
                    <p className="text-white">{formatDate(selectedContact.timestamp)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-8">
                  <button
                    onClick={() => handleMarkAsRead(selectedContact.id, selectedContact.is_read)}
                    className="btn-secondary flex-1"
                  >
                    {selectedContact.is_read ? t('admin.markRead') : t('admin.markRead')}
                  </button>
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="btn-primary flex-1 text-center"
                  >
                    Reply
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default AdminPage;
