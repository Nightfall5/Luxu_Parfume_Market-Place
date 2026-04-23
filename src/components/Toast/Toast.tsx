import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const toastStyles = {
  success: 'bg-green-100 text-green-800 border-green-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200'
};

const ToastIcon = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info
};

export function Toast({ message, type, onClose }: ToastProps) {
  const Icon = ToastIcon[type];
  
  return (
    <div className={`flex items-center p-4 rounded-lg border ${toastStyles[type]} animate-slide-up`}>
      <Icon className="h-5 w-5 mr-3" />
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="p-1 hover:opacity-70 transition-opacity"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}