"use client";

import { useEffect, useState } from "react";
import api from "@/services/axios";
import { Mail, Loader2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Contact[]>("/api/contact")
      .then((res) => setContacts(res.data))
      .catch(() => setError("Could not load messages."))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      background: "#0f172a",
      color: "#ffffff",
    });

    if (!result.isConfirmed) return;

    setBusyId(id);

    try {
      await api.delete(`/api/contact/${id}`);

      setContacts((prev) => prev.filter((c) => c.id !== id));

      toast.success("Message deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete message.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Messages</h1>

      <p className="mt-1 text-sm text-slate-500">
        Submissions from the website contact form.
      </p>

      {loading && (
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      )}

      {error && (
        <p className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      {!loading && !error && contacts.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-slate-500">
          <Mail className="mx-auto mb-3 h-8 w-8 text-slate-600" />
          No messages yet.
        </div>
      )}

      {!loading && contacts.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Contact</th>
                <th className="px-5 py-3 font-medium">Subject</th>
                <th className="px-5 py-3 font-medium">Message</th>
                <th className="px-5 py-3 font-medium">Received</th>
                <th className="px-5 py-3 text-center font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-medium text-white">
                    {c.name}
                  </td>

                  <td className="px-5 py-4 text-slate-400">
                    <p>{c.email}</p>
                    <p className="text-xs text-slate-600">{c.phone}</p>
                  </td>

                  <td className="px-5 py-4 text-slate-300">
                    {c.subject}
                  </td>

                  <td className="max-w-xs px-5 py-4 text-slate-400">
                    {c.message}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                    {new Date(c.createdAt).toLocaleString()}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => handleDelete(c.id)}
                      disabled={busyId === c.id}
                      className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300 disabled:opacity-50"
                      title="Delete Message"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}