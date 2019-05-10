<?php

namespace App\Http\Controllers\Index;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function Index()
    {
        return view('welcome');
    }

    public function Lifecycle()
    {
        return view('lifecycle');
    }
}
