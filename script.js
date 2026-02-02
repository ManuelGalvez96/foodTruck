document.getElementById('loginForm').onsubmit = function() {
    
    let username = document.getElementById('username').value;
    let frase = "Benvingut " + username;
    
    document.getElementById('bienvenida').textContent = frase;
    
    // Cerrar el modal
    document.getElementById('loginModal').checked = false;
    
    return false;
};
