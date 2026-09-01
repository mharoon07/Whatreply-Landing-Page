"use client";

import React, { useState } from "react";
import { Link2, Check, RefreshCw, X, Code2, AlertCircle, Terminal } from "lucide-react";
import { getStoredApiUrl, setStoredApiUrl } from "@/lib/blog-data";

interface ApiConfigBarProps {
  currentApiUrl: string;
  isCustomApi: boolean;
  error?: string;
  rawJson?: any;
  onRefresh: (newUrl?: string) => void;
}

export default function ApiConfigBar({
  currentApiUrl,
  isCustomApi,
  error,
  rawJson,
  onRefresh,
}: ApiConfigBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState(currentApiUrl || "");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showRawInspector, setShowRawInspector] = useState(false);

  const handleSave = () => {
    setStoredApiUrl(inputUrl);
    setSavedSuccess(true);
    onRefresh(inputUrl);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleClear = () => {
    setInputUrl("");
    setStoredApiUrl("");
    onRefresh("");
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-6 pt-6">
      {/* Connector Header Card */}
      <div className="bg-white border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="p-2.5 bg-gray-100 rounded-xl text-gray-700 shrink-0 border border-gray-200">
            <Link2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-sm sm:text-base text-gray-900">External Blog API Connector</h4>
              {isCustomApi && currentApiUrl && !error ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live API Connected
                </span>
              ) : error ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Connection Issue
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  No API Configured
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              {currentApiUrl ? (
                <span className="font-mono text-gray-700 font-medium truncate max-w-md inline-block">
                  {currentApiUrl}
                </span>
              ) : (
                "Enter your separated project's API URL below to display live articles."
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
          {rawJson && (
            <button
              onClick={() => setShowRawInspector(true)}
              className="text-xs font-semibold text-gray-700 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition border border-gray-200 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-gray-500" /> Inspect API Response
            </button>
          )}

          <button
            onClick={() => {
              setInputUrl(getStoredApiUrl());
              setIsOpen(true);
            }}
            className="text-xs sm:text-sm font-bold bg-gray-900 text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-sm flex items-center gap-2"
          >
            {currentApiUrl ? "Edit API URL" : "Connect Blog API"}
          </button>
        </div>
      </div>

      {/* Error alert notice if fetch fails */}
      {error && (
        <div className="mt-3 p-4 bg-red-50/80 border border-red-200 text-red-900 rounded-2xl text-xs sm:text-sm flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h5 className="font-bold text-red-950 mb-0.5">Could not fetch blogs from API:</h5>
            <p className="text-red-800 text-xs font-mono mb-2">{error}</p>
            <p className="text-xs text-red-700">
              Check if your backend API server is running and returning JSON array or object.
            </p>
          </div>
        </div>
      )}

      {/* Modal / Drawer for API URL Entry */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-gray-200 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gray-100 text-gray-900 rounded-xl">
                <Link2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Set External Blog API URL</h3>
                <p className="text-xs text-gray-500">Enter your backend project endpoint URL</p>
              </div>
            </div>

            <div className="space-y-4 my-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  API Endpoint URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-separated-project.com/api/blogs"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition font-mono text-gray-900"
                />
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1">
                <p className="font-semibold text-gray-900">Endpoint Format Notice:</p>
                <p className="text-gray-600 leading-relaxed">
                  Your backend can return a JSON array <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">[...]</code> or an object like <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">{`{ "data": [...] }`}</code> or <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">{`{ "posts": [...] }`}</code>.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
              {currentApiUrl ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold px-3 py-2 rounded-lg hover:bg-red-50 transition"
                >
                  Disconnect API
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-5 py-2.5 bg-gray-900 text-white font-bold text-xs rounded-xl hover:bg-gray-800 transition shadow-sm flex items-center gap-2"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" /> Saved!
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" /> Fetch Articles
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Raw Inspector Modal */}
      {showRawInspector && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-slate-100 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-800 relative">
            <button
              onClick={() => setShowRawInspector(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" /> Raw API Response Inspector
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Here is the exact JSON returned from your API endpoint ({currentApiUrl}):
            </p>

            <pre className="bg-slate-950 p-4 rounded-xl text-xs text-emerald-400 font-mono overflow-x-auto max-h-80 border border-slate-800">
              {JSON.stringify(rawJson, null, 2)}
            </pre>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowRawInspector(false)}
                className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
