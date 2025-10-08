// theme.js
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.applyTheme(this.currentTheme);
        this.init();
    }
    
    init() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (this.themeToggle) {
            const icon = theme === 'light' ? '🌙' : '☀️';
            const text = theme === 'light' ? 'Тёмная' : 'Светлая';
            this.themeToggle.innerHTML = `${icon} ${text}`;
        }
    }
    
    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});