var bgcolor = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#95a5a6','#f39c12'];

var words = ["Indiana Jones","Spider Man","Sherlock Holmes","Albert Einstein","Winnie the Pooh","Shakespeare",
			"Snoopy","Christopher Columbus","Abraham Lincoln","Isaac Newton","Scooby Doo","Voldemort", "Elvis Presley", 
			"Dr. Seuss", "Darth Vader", "Yoda", "Mario", "The Hulk", "Santa Claus", "E.T", "The Lion King", "The Wizard of Oz", 
			"The Lord of the Rings", "Batman", "Star Wars", "Shrek", "The Matrix", "The Terminator", "Rocky", 
			"Willy Wonka and the Chocolate Factory", "The Simpsons", "American Dad", "Man vs. Wild", "Hell's Kitchen", 
			"Everybody Hates Chris", "Wheel of Fortune", "SpongeBob SquarePants", "South Park", "Naruto", "Family Guy", 
			"The Office", "Pokemon", "The Hobbit by J. R. R. Tolkien", "The Lion the Witch and the Wardrobe - C. S. Lewis", 
			"Alice's Adventures In Wonderland by Lewis Carroll", "Twilight by Stephenie Meyer", "The Cat in the Hat by Dr. Seuss",
			"Hunger Games", "Thrift Shop by Macklemore", "Radioactive by Imagine Dragons", "Started from the Bottom by Drake", 
			"Michael Jackson", "Justin Bieber", "Bill Gates", 'Twerk', 'Fetch', 'Tweet', 'Swag', 'Bananas', 'Selfie', 'YOLO', 
			'Snapchat', 'League of Legends', 'Phablet', 'Global Warming', 'Doge', 'Gangnam Style','Baby','Door','Banana','Finger','fence',
			'Big','Swimming Pool', 'Sun', 'Church','Yo-yo', 'Boy', 'Bag', 'Alligator', 'Mouse', 'Birthday', 'Winter', 'Beach', 'Tree',
			'Teacher', 'King', 'Telephone','Eye', 'Water', 'Jelly','Balloon', 'Toothbrush', 'Pants',
			'Mom', 'Body', 'Bike','Toilet', 'Paper', 'Baseball', 'Pig','Lawn', 'Mower', 'Fire', 'School','Belt','Ice Cream', 'Drums',
			'Spider', 'Shark', 'Seashell','Computer', 'Grandma', 'Pillow','Kite', 'Homework','Bed', 'Bird', 'Gum','Book', 'Dress', 'Queen',
			'Puppy', 'Happy', 'Doctor',];



function randBG(){
	var i = Math.floor( Math.random() * 8);

	return bgcolor[i];
}

function changeBG(e){
	$(e).css('background', randBG());

}

function randWord(){
	var i = Math.floor(Math.random() * 125);
	return words[i];
}

function randTime(){
	var i = Math.floor(Math.random()* 1200001);
	return i + 60000;
}