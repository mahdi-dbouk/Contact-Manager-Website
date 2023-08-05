<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use MatanYadaev\EloquentSpatial\SpatialBuilder;
use MatanYadaev\EloquentSpatial\Objects\Point;
use MatanYadaev\EloquentSpatial\Traits\HasSpatial;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;
    use HasSpatial;

    protected $fillable = [
        'name',
        'phone_number',
        'city',
        'country',
        'location'
    ];

    protected $cast = [
        'location' => Point::class
    ];
}
