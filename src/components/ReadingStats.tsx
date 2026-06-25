
"use client";

import useReadingProgress from "@/hook/useReadingProgress";
import { Clock, MapPin, Timer } from "lucide-react";


interface Props {
    readingTime: number;
}

export default function ReadingStats({ readingTime }: Props) {
    const progress = useReadingProgress();

    const remaining = readingTime * (1 - progress / 100);

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">

            {/* Header */}
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Progress Membaca
            </h4>

            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary-500 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Stats */}
            <div className="text-sm text-gray-600 space-y-2">

                {/* Progress % */}
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{Math.round(progress)}% selesai</span>
                </div>

                {/* Total reading time */}
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span>{readingTime} menit total</span>
                </div>

                {/* Remaining time */}
                <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-primary-500" />
                    <span>
                        ~{Math.max(0, remaining).toFixed(1)} menit tersisa
                    </span>
                </div>

            </div>
        </div>
    );
}