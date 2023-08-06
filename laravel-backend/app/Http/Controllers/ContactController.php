<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Throwable;

class ContactController extends Controller
{

    public function contacts(){
        try{
            $this->getContacts();  
        }
        catch(Throwable $th){
            return response()->json(['error' => "Could not retieve contacts"], 200);
        }
    }

    public function contactsCUD(Request $request, $action){
        if($action == 'delete')
            return $this->deleteContact($request);
        if($action == 'update')
            return $this->updateContact($request);
        if($action == 'create')
            return $this->createContact($request);
    }

    public function createContact(Request $request){

        try{
            $contact = Contact::create([
                'name' => $request->name,
                'phone_number' => $request->phone,
                'city' => $request->city,
                'country' => $request->country,
                'latitude' => $request->latitude,
                'longtitude' => $request->longtitude
            ]);
            $contact->save(); 
        }
        catch(Throwable $th){
            return response()->json(['error' => "failed to create contact"], 200);
        }
        return response()->json([
            'status'=>'success',
            'contact'=>$contact
        ],200);
    }
    public function getContacts() {
        $contacts = Contact::all();
        return response()->json(['contacts'=>$contacts],200);
    }

    public function updateContact(Request $request) {
        try{
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
        }
        catch(Throwable $th){
            return response()->json(['error' => "Failed to update or create contact"], 200);
        }
        
        return response()->json(['status'=>true],200);
        
    }

    public function deleteContact(Request $request) {
        try{
            Contact::find($request->id)->delete();   
        }
        catch(Throwable $th){
            return response()->json(['error' => "Contact doesn't exist"], 200);
        }
        return response()->json(['status'=>true],200);
    }


}
