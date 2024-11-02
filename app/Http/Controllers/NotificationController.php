<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function getNotifications(Request $request): JsonResponse {
        $notifications = Notification::where('user_id', auth()->id())
            ->where('read', false)
            ->get();

        return response()->json([
            'notifications' => $notifications,
            'count' => $notifications->count()
        ]);
    }

    public function markAsRead(Request $request)
    {
        Notification::where('user_id', auth()->id())
            ->whereIn('id', $request->notification_ids)
            ->update(['read' => true]);

        return response()->json(['success' => true]);
    }
}
