const fetch = require('node-fetch');

async function getRobloxUserInfo(userId) {
  const url = `https://users.roblox.com/v1/users/${userId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    console.log(`👤 Имя: ${data.name}`);
    console.log(`📝 Описание: ${data.description || 'Нет описания'}`);
    console.log(`📅 Дата создания: ${data.created}`);
    console.log(`🔗 Профиль: https://www.roblox.com/users/${userId}/profile`);
  } catch (error) {
    console.error('❌ Не удалось получить информацию:', error.message);
  }
}

// Пример использования
const userId = 1; // Замените на нужный userId
getRobloxUserInfo(userId);
