import React from 'react'

// this will use django authentication

export function LoginForm() {
    return (
        <div>
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username-login" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password-login" />
                <input type="submit" value="Go!" />
            
            </form> 
        </div>
    )
}
