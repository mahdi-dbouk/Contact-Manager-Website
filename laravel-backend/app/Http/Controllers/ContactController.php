<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function createContact(Request $request){

        $user = Auth::user();
        $contact = Contact::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'phone_number' => $request->phone,
            'city' => $request->city,
            'country' => $request->country,
            'latitude' => $request->latitude,
            'longtitude' => $request->longtitude
        ]);
        $contact->save();


        return response()->json([
            'status'=>'success',
            'contact'=>$contact
        ],200);
    }
}
