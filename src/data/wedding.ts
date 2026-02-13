/** Путь к аудио в public/. Положите файл "I Think They Call This Love" как i-think-they-call-this-love.mp3 */
export const weddingData = {
	musicUrl: "/perfect.mp3",
	/** Фото пары на первом экране (при клике открывается приглашение). Путь от корня сайта для совместимости с мессенджерами и PWA. */
	couplePhotoUrl: "/rh.jpeg",
	groomName: "Myrat",
	brideName: "Melike",
	/** Телефоны для связи */
	groomPhone: "+993 71914638",
	bridePhone: "+993 61570925",
	/** Логотип в блоке контактов (путь в public/) */
	logoUrl: "/logo-red.png",
	/** Доп. контакт (организатор и т.д.) */
	organizerPhone: "+993 62090252",
	organizerPhone2: "+993 61484840",
	organizerLabel: "Ваш заказ наша ответственность!",
	/** Ссылка на Instagram */
	instagramUrl: "https://www.instagram.com/invitationsred",
	instagramLabel: "Instagram",
	weddingDate: new Date("2026-05-23T18:00:00"),
	venue: "Bagtyýarlyk",
	venueAddress: "пр. Битарап Туркменистан, Ашхабад",
	/** Фото ресторана (URL или путь в public/) */
	venuePhotoUrl: "https://picsum.photos/800/450?random=venue3",
	/** Ссылка на карту (Google Maps и т.д.) */
	mapUrl:
		"https://www.google.com/maps/place/Ashgabat,+Turkmenistan/@37.9600766,58.3260629,14z",
	schedule: [
		{
			time: "18:00",
			title: "Прибытие гостей",
			description: "Встреча гостей, welcome-напитки и лёгкая атмосфера"
		},
		{
			time: "18:30",
			title: "Начало банкета",
			description: "Торжественный ужин в ресторане Bagtyýarlyk"
		},
		{
			time: "21:00",
			title: "Самый сладкий момент вечера",
			description: "Свадебный торт и поздравления"
		},
		{
			time: "22:00",
			title: "Сияющий финал",
			description: "Танцы и развлечения"
		},
		{
			time: "23:00",
			title: "Завершение вечера",
			description: "Прощание с гостями"
		}
	],
	photos: [
		"https://picsum.photos/400/500?random=11",
		"https://picsum.photos/400/500?random=22",
		"https://picsum.photos/400/500?random=33",
		"https://picsum.photos/400/500?random=44",
		"https://picsum.photos/400/500?random=55",
		"https://picsum.photos/400/500?random=66"
	]
} as const;
