"use strict";

class Profile
{
    constructor(username, fullName, password, email, phone, address, gender)
    {
        this.username = username;
        this.fullName = fullName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
    }

    getUsername()
    {
        return this.username;
    }
    getFullName()
    {
        return this.fullName;
    }
    getPassword()
    {
        return this.password;
    }
    getEmail()
    {
        return this.email;
    }
    getPhone()
    {
        return this.phone;
    }
    getAddress()
    {
        return this.address;
    }
    getGender()
    {
        return this.gender;
    }

    setUsername(username)
    {
        this.username = username;
    }
    setFullName(fullName)
    {
        this.fullName = fullName;
    }
    setPassword(password)
    {
        this.password = password;
    }
    setEmail(email)
    {
        this.email = email;
    }
    setPhone(phone)
    {
        this.phone = phone;
    }
    setAddress(address)
    {
        this.address = address;
    }
    setGender(gender)
    {
        this.gender = gender;
    }
}

module.exports = Profile;