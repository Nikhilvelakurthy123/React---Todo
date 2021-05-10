package com.todo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOaWtoaWwiLCJleHAiOjE2MjExNDYyNjgsImlhdCI6MTYyMDU0MTQ2OH0.iYNDaEqTZDbEUz4Xfa3w36Uu4UgCXXv_AWrec0rh1uIy5APlgbmUc28SAxiv1qVJNKPLHhQ_qT3nn66iwQ2kIg"
//    }
    
    //Nikniv - user token	
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOaWtuaXYiLCJleHAiOjE2MjExNDY5ODIsImlhdCI6MTYyMDU0MjE4Mn0.Ek1kXE9yeIRdmOqLS5tr5uCgnem0VoB2rkdNGPa8W3jJkFRoBo5u-i8gEFOkEB2Y4CHnc8Fq1O1iXbz2v00m6Q"
//    }
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

