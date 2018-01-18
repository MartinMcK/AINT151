var roomArray = [
	{
		title:'Welcome to Prison Escape',
		text:'The Idea of this game is for you to try an escape your prison cell without being caught. <p> use your mouse to navigate around the game by clicking the buttons <P> these will change colour in order to notify you the button can be selected',
		choices:[
			{
				text:'Start Game',
				index:1
			}
		]
	},
	{
		title:'Dungeon Cell',
		text:'You have awoken, you do not know where you are. You need to get up and gather your senses and search the cell.<p> You here a band at your cell door and then someone yelling, PRISONER YOU HAVE ONE MINUTE UNTILL YOUR TIME IS UP! <p> Thats when you relise you need to escape or you will die',
		choices:[
			{
				text:'Get out of bed and look around',
				index:2
			}
		]
	},
	{
		title:'Dungeon Cell',
		text:'You start to look around your cell for ways to escape or items that can help you escape, you see a window, your bed and a toilet.',
		choices:[
			{
				text:'Look out the window ',
				index:3
			},
			{
				text:'Look under your bed',
				index:4
			},
			{
				text:'Search the toilet',
				index:5
			}
		]
	},
	{
		title:'Search the window',
		text:'You look out the window and see freedom on the horizon,but the window is too small to escape through, plus the bars wont break. You need to find another way out',
		choices:[
			{
				text:'Back away from window, try something else',
				index:2
			}
		]
	},
	{
		title:'Look under your bed ',
		text:'You look under your bed for anything that you can use to escape, nothing here apart from a load of dust and a puddle of Urine. <p> There must be someway you can get out or something you can use to get out.',
		choices:[
			{
				text:'Back away from bed, try something else ',
				index:2
			}
		]
	},
	{
		title:'Check the toilet',
		text:'You walk over to the toilet and see something shiny in it, you reach in and pull it out, <p> its a hair pin, maybe you can pick the lock with it. <p> There is only one lock pick so you need to be careful',
		choices:[
			{
				text:'Pick the lock',
				index:6
			}
		]
	},
	{
	title:'Unlock the door',
	text:'You unlock the door and look around, no guards seem to be on duty, they must of been called away to do something more important. <p> You close the cell door behind you. You have a quick look to see if there are actually any guards about.',
	choices:[
		{
			text:'Enter prison corridor',
			index:7
		}
	]
},
{
	title:'Dungeon Corridor',
	text:'You walk quickly but quietly through the dungeon corridor, you hear the cries and screams of other prisoners. <p> You think to yourself “there is nothing i can do for them” and keep moving quick',
	choices:[
		{
			text:'Take the stairs up',
			index:8
		},
		{
			text:'Take the stairs down',
			index:13
		}
	]
},
{
	title:'Stairs Up',
	text:'You take the stairs up, as you walk up you can still hear the cries of the other prisoners ',
	choices:[
		{
			text:'Walk over the guards balcony',
			index:9
		}
	]
},
{
	title:'Prison upper level',
	text:'You walk across the balcony overlooking the cells, the guards have seen that you have escaped and the alarm has been sounded, <p> you need to move fast. Quick there are some stairs to take you down! ',
	choices:[
		{
			text:'Take the stairs down',
			index:10
		}
	]
},
{
	title:'Stairs back down',
	text:'You go down the stairs on the other side of the corridor, you can either continue going down or take the corridor to your left ',
	choices:[
		{
			text:'Corridor past the leaders office',
			index:11
		},
		{
			text:'stairs down',
			index:13
		}
	]
},
{
	title:'Prison Office Corridor',
	text:'You take the corridor to the left, this takes you past the head of the prison office ',
	choices:[
		{
			text:'Run towards the main enterance ',
			index:12
		}
	]
},
{
	title:'Main Enterance',
	text:'You arrive at the main entrance, you have been caught and are hereby sentenced to death. You have failed to escape ',
	choices:[
		{
			text:'Back to cell',
			index:1
		}
	]
},
{
	title:'Stairs Down',
	text:'Take the stairs down into the storage room, the stairs creak as you go down, i hope no one heard that.',
	choices:[
		{
			text:'Enter storage room',
			index:14
		}
	]
},
{
		title:'Storage Room',
		text:'You walk into the storage room and look around. There are three ways that may get you out, the drain, the window or the other door. ',
		choices:[
			{
				text:'Drain',
				index:15
			},
			{
				text:'Window',
				index:16
			},
			{
				text:'Open Door',
				index:17
			}
		]
	},
	{
		title:'Drain Cover',
		text:'You lift up the drain cover and see a ladder, the wood on the ladder is rotten but it’s the only way to get down. <p> You think to yourself “i must to this quickly and carefully, i cant alert the guards to my whereabouts” ',
		choices:[
			{
				text:'Ladder',
				index:18
			}
		]
	},
	{
		title:'Window',
		text:'You walk up to the window and look outside, you can see freedom but the window is too small for you to fit into plus the drop is too high, best try something else.',
		choices:[
			{
				text:'Try Something Else',
				index:14
			}
		]
	},
	{
		title:'Door',
		text:'You see another door and try and open it, the door is extremely stiff so you try again. <p> The door opens this time but falls of its hinges and is a cupboard there isnt a way through, <p> this alerts the guards to your exact position, you have been caught.',
		choices:[
			{
				text:'Back to Cell',
				index:1
			}
		]
	},
	{
		title:'Ladder',
		text:'As you climb down the ladder you can hear guards above you searching for where you went. <p> The ladder breaks and you fall, luckily the guards did not hear. <p> You get to your feet and soon realise that you are under the prison, in its sewers and it stinks!',
		choices:[
			{
				text:'Enter Sewers',
				index:19
			}
		]
	},
	{
		title:'Sewers',
		text:'You have a look around but there isnt much too see, you can see a bit of light in the distance you you start to run towards it. <p> Looks like a way out! Finally',
		choices:[
			{
				text:'End of sewers',
				index:20
			}
		]
	},
	{
		title:'End of sewers',
		text:'You reach the end, as you slip through the bars at the end of the sewers you can smell the fresh air and the cold breeze on your face, <p> you are free and safe. You have Escaped!',
		choices:[
			{
				text:'Escaped',
				index:21
			}
		]
	},
	{
		title:'ESCAPED',
		text:'YOU ESCAPED!',
		choices:[
			{
				text:'Play Again?',
				index:1
			}
		]
	}
]
