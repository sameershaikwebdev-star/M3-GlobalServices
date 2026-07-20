"use client";

import { useEffect, useState } from "react";
import api from "@/services/axios";
import { Briefcase, Loader2, Download, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface Application {
  id: string;
  originalFileName: string;
  fileType: string;
  fileSize: number;
  status: string;
  uploadedAt: string;
}

export default function CareersPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = () => {
    setLoading(true);

    api
      .get<Application[]>("/api/admin/applications")
      .then((res) => setApps(res.data))
      .catch((err) => {
        console.error(err.response?.status);
        console.error(err.response?.data);
        setError("Could not load applications.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Application?",
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
      await api.delete(`/api/careers/${id}`);

      setApps((prev) => prev.filter((a) => a.id !== id));

      toast.success("Application deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete application.");
    } finally {
      setBusyId(null);
    }
  };

  const handleDownload = async (id: string, fileName: string) => {
    setBusyId(id);

    try {
      const res = await api.get(`/api/careers/${id}/download`, {
        responseType: "blob",
      });

      const url = URL.createObjectURL(res.data);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);

      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download resume.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Applications</h1>

      <p className="mt-1 text-sm text-slate-500">
        Resumes submitted through the careers page.
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

      {!loading && !error && apps.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-slate-500">
          <Briefcase className="mx-auto mb-3 h-8 w-8 text-slate-600" />
          No applications yet.
        </div>
      )}

      {!loading && apps.length > 0 && (
        <div className="mt-6 space-y-3">
          {apps.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-white">
                  {a.originalFileName}
                </p>

                <p className="text-xs text-slate-500">
                  {a.status}
                </p>

                <p className="text-xs text-slate-500">
                  {(a.fileSize / 1024).toFixed(1)} KB
                </p>

                <p className="text-xs text-slate-500">
                  {new Date(a.uploadedAt).toLocaleString()}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() =>
                    handleDownload(a.id, a.originalFileName)
                  }
                  disabled={busyId === a.id}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/5 disabled:opacity-50"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>

                <button
                  onClick={() => handleDelete(a.id)}
                  disabled={busyId === a.id}
                  className="flex items-center gap-1.5 rounded-lg border border-red-500/20 px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}