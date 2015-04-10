package com.angularauth.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
    @RequestMapping(value="/", method=RequestMethod.GET)
    public final String indexGet(){
        return "Index";
    }
    
    @RequestMapping(value="/Welcome", method=RequestMethod.GET)
    public final String welcomeGet(){
        return "Welcome";
    }    
    
    @RequestMapping(value="/About", method=RequestMethod.GET)
    public final String aboutGet(){
        return "About";
    }    
}