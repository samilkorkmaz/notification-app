<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notification extends Model
{
    use HasFactory;

    // Specify the table if it does not follow Laravel's naming convention
    protected $table = 'notifications';

    // Define fillable fields
    protected $fillable = [
        'user_id',
        'title',
        'message',
        'read',
    ];

    // Define timestamps if they are not using default names
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    // Define a relationship with the User model
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
