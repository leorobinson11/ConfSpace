import React from 'react';

const Header = () => {
    return (
        <header>
        <div class="title"> ConfSpace </div>
        <div class="btn-group">
            <a href="/login" class="login-btn">Login</a>
            <a href="/signup" class="register-btn">Register</a>
        </div>
      </header>
    );
}

export default Header;