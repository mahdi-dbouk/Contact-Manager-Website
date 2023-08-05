<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function createContact(Request $request){

        $contact = Contact::create([
            'user_id' => Auth::user()->id,
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

    public function getContacts(Request $request) {
        $contacts = Contact::find($request->user_id)->all();
        return response()->json(['contacts'=>$contacts],200);
    }

    public function updateContact(Request $request) {
        Contact::updateOrCreate(
            ['id' => $request->id],
            [
                'name' => $request->name,
                'phone_number' => $request->phone,
                'city' => $request->city,
                'country' => $request->country,
                'latitude' => $request->latitude,
                'longtitude' => $request->longtitude
            ]
        );
        
        return response()->json(['status'=>true],200);
        
    }

    public function deleteContact(Request $request) {
        Contact::find($request->id)->delete();
        return response()->json(['status'=>true],200);
    }


}
