import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Alert from 'react-bootstrap/lib/Alert';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FontAwesome from 'react-fontawesome';
import './css/Activity.css';


var activities = [
  {
    exhibitName: 'Publix',
    activityName: 'Cultural Foods',
    theActivity: 'Malcolm the Robot’s eyes light up, “I love to travel and try new cuisine from all over the world! During my travels, I’ve learned a lot about other cultures and their languages. Can you help me prepare a Hispanic meal?” Help the robot by finding three items from the store: rice, carrots, and soup. After you do so, the Robot will tell you how to say them in Spanish.',
    extendingTheActivity: 'You can incorporate other cultures into this activity. Try making an Italian dish, like spaghetti and meatballs. You should ask the child to find the ingredients to make the recipe and talk about Italian culture, perhaps how they make pasta from scratch using flour, eggs, salt, and olive oil. You can also try French cuisine, like ratatouille. Ask the child to find a variety of vegetables (zucchini, eggplant, squash, and tomato sauce) to incorporate and talk about how the French culture uses a lot of fresh ingredients.',
    whatChildrenLearn: 'In this activity the children are learning about other cultures traditions and about being bilingual. Learning a second language early on is much easier than trying to learn a language later in high school.',
    exploringLanguage:[
      {
        english: 'Rice',
        spanish: 'Arroz',
        french: 'Riz'
      },
      {
        english:'Carrots',
        spanish:'Zanahoria',
        french: 'Carottes'
      },
      {
        english:'Soup',
        spanish:'Sopa',
        french: 'Soupe'
      }
    ]
  },
  {
    exhibitName: 'Publix',
    activityName: 'Nutrition',
    theActivity: 'Malcolm the Robot looks in amazement at all the food. “I do not eat food, so I want to learn more about the different types of food in the five major food groups: fruits, vegetables, grains, dairy, and proteins.” Help the Robot by finding two foods from each of the major food groups and explain to him why the foods in each group belong together.',
    extendingTheActivity: 'As your child selects different foods, discuss the various characteristics of the food, and encourage them to find another one like it. You may want to ask questions about where the food comes from, or what that food does for your growing body.',
    whatChildrenLearn: "Putting objects into categories is an important developmental milestone. Categories allow people to make guesses about unfamiliar objects. For example, someone may not know what a mango is, but once they know it belongs in the fruit category, they can understand that it would share many of the attributes that other fruits have. Learning to build categories (such as food groups) engages children's innate ability to organize knowledge they learn from their world.",
    exploringLanguage:[
      {
        english: 'Category',
        spanish: 'Categoria',
        french: 'Catégorie'
      },
      {
        english:'Fruit',
        spanish:'Fruta',
        french: 'Fruit'
      },
      {
        english:'Organize',
        spanish:'Organizar',
        french: 'Organiser'
      }
    ]
  },
  {
    exhibitName: 'Publix',
    activityName: 'Money',
    theActivity: 'Somehow Malcolm the Robot has some money.  “I would like to learn how money works by buying something here at the store. Help me by selecting out items and seeing how much they cost using the scanner at the checkout. How many items can I buy?”',
    extendingTheActivity: 'As your child finds the prices of various items, discuss their relative costs. You can draw on their number ability by choosing two items and ask which price is bigger. Have them count out loud the number of dollars they will need to spend to purchase all they have chosen. Ask them why they think some items cost more than others.',
    whatChildrenLearn: "Discussing money is an easy way to engage children's growing math and counting skills. It makes a real world connection for why math sense is important. Making purchases also require children to begin to understand greater than and less than comparisons about numbers.",
    exploringLanguage:[
      {
        english: 'Money',
        spanish: 'Dinero',
        french: 'Argent'
      },
      {
        english:'Store',
        spanish:'Tienda',
        french: 'Magasin'
      },
      {
        english:'Scanner',
        spanish:'Escáner',
        french: 'Scanner'
      }
    ]
  },
  {
    exhibitName: 'Publix',
    activityName: 'Sorting',
    theActivity: 'Malcolm the Robot looks at his body. “Because I cannot grow, I am very concerned with the sizes of things. Pick five things from the grocery store and order them by size, from smallest to largest.”',
    extendingTheActivity: 'At its core, this is a simple activity, but you can make it more challenging. Ask your child to next order the objects not by height but by weight. Then ask them to sort them by color or shape.',
    whatChildrenLearn: "Sorting allows children to more easily compare a number of objects across different dimensions. They work on greater than and less than skills. They also develop their growing sense of order that Piaget studied in young children. As they mature, they are better able to select dimensions to sort along and can order larger sets of objects.",
    exploringLanguage:[
      {
        english: 'Body',
        spanish: 'Cuerpo',
        french: 'Corps'
      },
      {
        english:'Five',
        spanish:'Cinco',
        french: 'Cinq'
      },
      {
        english:'Size',
        spanish:'Tamaño',
        french: 'Taille'
      }
    ]
  },
  {
    exhibitName: 'Publix',
    activityName: 'Letters',
    theActivity: 'Malcolm the Robot exclaims, “I noticed that robot starts with the same letter as rice. I would like to find three objects in the store that also start with an R.” After you help the Robot do that, find three objects that start with the same letter as your name or a friend\'s name.',
    extendingTheActivity: 'Ask your child to trace the letter on the object. Many logos use different fonts to write their name. Ask your child if they notice any differences across all the letter P\'s, for example.',
    whatChildrenLearn: 'Letter sense and letter recognition is key to more complex activities such as reading. Children start with their knowledge of the alphabet but need to expand on their understanding of printed material by recognizing the similarities and differences in how letters may be printed.',
    exploringLanguage:[
      {
        english: 'Robot',
        spanish: 'Robot',
        french: 'Robot'
      },
      {
        english:'Three',
        spanish:'Tres',
        french: 'Trois'
      },
      {
        english:'Letter',
        spanish:'Letra',
        french: 'Lettre'
      }
    ]
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Bones',
    theActivity: 'Malcolm the Robot states “Oh, bones! I do not have bones in my body, so I want to learn all about the skeleton of animals. However, the skeletons of different animals look quite different.” Imagine you have a dog that has to go to the vet to get an X-Ray. Can you find the X-Ray that looks like a dog? Try to find the stuffed animal that matches each of the X-Rays, and then place the animals in order, from smallest to largest.',
    extendingTheActivity: 'If this seems too easy, you can make it more challenging by having the child grouping the X-Rays by how they look or by how they move (i.e. four legs vs. no legs). To make this more symbolic, you can have the child put on the veterinarian scrubs and stethoscope.',
    whatChildrenLearn: 'Symbolic play is very important in helping children to understand, according to Piaget. This is also the time when children are learning to differentiate humans from other animals. Children are beginning to evaluate stimuli on several levels and understand the differences between animals.',
    exploringLanguage:[
      {
        english: 'Bones',
        spanish: 'Hueso',
        french: 'Des os'
      },
      {
        english:'Skeleton',
        spanish:'Esqueleto',
        french: 'Squelette'
      },
      {
        english:'Dog',
        spanish:'Perro',
        french: 'Chien'
      }
    ]
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Eating the Rainbow',
    theActivity: 'Malcolm the Robot notes, “For some people, there are certain foods that they cannot eat. There are people who can’t eat dairy, like milk or cheese. Using the “I can eat a Rainbow” help me design a meal plan for you and also someone who cannot eat breads or grains. These people have what is called Celiac disease.”',
    extendingTheActivity: 'Try to help your child by pointing out things that you make regularly.  It may help to ask them which foods are their favorites. You may want to explain how you prepare a meal, and how that is different for people all around the world. Introduce different allergens that you know of (gluten, peanuts, etc.) that schoolmates may have and have the child avoid using these for their meal plans.',
    whatChildrenLearn: 'By rehearsing a task, the information is better remembered by children. When the child continues to make the meal plans, he or she will learn how to incorporate a well balanced diet into their everyday life. By seeing the full meal circle with the images, the child will be able to relate that to their meals at home.',
    exploringLanguage:[
      {
        english: 'Eat',
        spanish: 'Comer',
        french: 'Manger'
      },
      {
        english:'Cheese',
        spanish:'Queso',
        french: 'Fromage'
      },
      {
        english:'Rainbow',
        spanish:'Arcoiris',
        french: 'Arc en ciel'
      }
    ]
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Going to the Doctor',
    theActivity: 'Malcolm the Robot doesn’t know about the human body. He needs to know about muscles, nerves, and organs. Malcolm says, “I want to help people feel better. When I tell you the symptoms, help me identify the body part where the symptoms come from.”<br/>Problem: It hurts you to swallow. <br/>Answer: Throat<br/>Problem: You have diarrhea and cramps.<br/>Answer: Intestines <br/>Problem: You are coughing and have trouble breathing.<br/>Answer: Lungs',
    extendingTheActivity: 'You may come up with more problems for the child to answer, if these seem too easy. To further their knowledge, you can explain medicines that help with these symptoms. It may help with understanding to point out an overarching illness that may explain the symptoms (i.e. strep throat). You should also point out and identify where these parts are on yourself and the child.',
    whatChildrenLearn: 'This activity helps children understand their bodies more by identifying where the part is on the skeleton and then locating it on themselves. This is a mapping task, which is important in children’s development. Problem solving is also an important skill for children to develop. By being able to determine which body part portrays the symptom, children are also identifying which body part it cannot be, which supports deductive reasoning.',
    exploringLanguage:[
      {
        english: 'Muscles',
        spanish: 'Musculos',
        french: 'Muscles'
      },
      {
        english:'Nerves',
        spanish:'Nervios',
        french: 'Nerf'
      },
      {
        english:'Organs',
        spanish:'Organos',
        french: 'Organes'
      }
    ]
  },
  {
    exhibitName: 'OUTBACK/CARRABA’S',
    activityName: 'Make Me a Pizza',
    theActivity: 'Malcolm the Robot sees all the pizza toppings. “I love preparing pizzas! Let us surprise your family with pizza for dinner. Help me create a pizza following this recipe and using the ingredients on the counter.”<br/>Sauce<br/>Cheese<br/>1+2 pieces of pepperoni<br/>2-0 green peppers<br/>3-1 pieces of mushrooms',
    extendingTheActivity: 'You can have the child count each number of ingredients onto the pizza, then explain the – or + meaning add or take away. When this recipe is completed, you may ask the child to prepare a pizza to their liking or your liking. You may sit at the table and ask the child to take your order, providing arithmetic problems as numerals for ingredients.',
    whatChildrenLearn: 'By doing this activity, children practice their math and spatial skills. The addition and subtraction problems in the recipe allow children to practice concepts of math, while having to spread the ingredients out on the pizza reinforces spatial and motor skills.',
    exploringLanguage:[
      {
        english: 'Family',
        spanish: 'Familia',
        french: 'Famille'
      },
      {
        english:'Dinner',
        spanish:'Cena',
        french: 'Dîner'
      },
      {
        english:'Recipe',
        spanish:'Receta',
        french: 'Recette'
      }
    ]
  },
  {
    exhibitName: 'OUTBACK/CARRABA’S',
    activityName: 'Advanced Pizza Making (8-11 year olds)',
    theActivity: 'Malcolm the Robot sees all the pizza toppings. “I love preparing pizzas! Let us surprise your family with pizza for dinner. Help me create a pizza following this recipe and using the ingredients on the counter.”<br/>Sauce<br/>Slices of cheese<br/>3 x 2 Pieces of pepperoni<br/>3 Pieces of peppers on 1/4 of the pizza<br/>2 x 2 Pieces of mushrooms on 1/3 of the pizza',
    extendingTheActivity: 'You should ask the child whether the 1/3 or 1/4 is larger. It would help to have the child divide the pizza into parts and compare each section. If this seems too easy, you could provide your own order with increasing difficulty of the activity (e.g. 5 x 2 pieces of pepperoni on 3/4 of the pizza). Ask them which fraction is the most of the pizza and the least?',
    whatChildrenLearn: 'At this age, children are developing the ability to represent a problem mentally, which allows them to solve multi-step problems. They are also developing the skill to think abstractly, as in comparing the sections of the pizza in their mind. This is also a rehearsal task, because the children are practicing the math skills.',
    exploringLanguage:[
      {
        english: 'Family',
        spanish: 'Familia',
        french: 'Famille'
      },
      {
        english:'Dinner',
        spanish:'Cena',
        french: 'Dîner'
      },
      {
        english:'Recipe',
        spanish:'Receta',
        french: 'Recette'
      }
    ]
  },
  {
    exhibitName: 'OUTBACK/CARRABA’S',
    activityName: 'Order up!',
    theActivity: 'Robots are good at taking orders. Malcolm the Robot states, “I really want to learn how to be a server at Outback, can you help me? We must take everyone’s order and prepare it in the kitchen.” A family orders a cheese sandwich and two ham sandwiches. Try to remember the order and prepare it in the kitchen, then deliver the food to the family.',
    extendingTheActivity: 'If you want to make this more challenging, you can ask the child to remember more items. However if this is too challenging, you can give the child less items to remember.',
    whatChildrenLearn: 'This is a rudimentary memory skill, in which children practice strategies to remember things. Children at this age should be able to remember the orders, so giving them more to remember and memory strategies will reinforce this important skill.',
    exploringLanguage:[
      {
        english: 'Prepare',
        spanish: 'Preparar',
        french: 'Prépare'
      },
      {
        english:'Kitchen',
        spanish:'Cocina',
        french: 'Cuisine'
      },
      {
        english:'Ham',
        spanish:'Hamón',
        french: 'Jambon'
      }
    ]
  },
  {
    exhibitName: 'OUTBACK/CARRABA’S',
    activityName: 'I’m Here to Help',
    theActivity: 'After placing the order, the family realized that the bill is going to be $20, but they only have $15, which is all the money they have left for the week. The family leaves all of their $15 and goes home. Is this what the family should have done? What if you have $5 and the family asks you for help to pay? Should you give the family $5 so that they can pay for their meals or should they order less food? ',
    extendingTheActivity: 'Depending on the child’s answer, ask them why they would or would not share their money. You can explain how it is beneficial to others who are in need to lend them help. Also, it may help to tell the child that they can be paid back if they do help.',
    whatChildrenLearn: 'Children at this age are beginning to develop morality. This is an important concept to their understanding of their world and themselves. By doing this activity, children reinforce their understanding of what is right or wrong. This activity is also helpful in understanding mathematical skills, because it reinforces greater than and less than concepts.',
    exploringLanguage:[
      {
        english: 'Bill',
        spanish: 'Cuenta',
        french: 'Billet'
      },
      {
        english:'Week',
        spanish:'Semana',
        french: 'Semaine'
      },
      {
        english:'Home',
        spanish:'Casa',
        french: 'Maison'
      }
    ]
  },
  {
    exhibitName: 'Art',
    activityName: 'Shall We Dance?',
    theActivity: 'Malcolm the Robot’s starts to move his legs as he gets closer to this exhibit.  “I can’t wait for this party! There are so many dance styles to choose from, like country and Latin, each with their own moves. I need your help mastering the basic steps from some styles!”',
    extendingTheActivity: 'After practicing each of the styles, ask if the child can come up with a routine incorporating the different moves that they learned. To carry this activity home, you can ask the child if he/she is interested in learning more moves from one or more of the different styles. You can find videos of different moves online.',
    whatChildrenLearn: 'During this age, children are refining their motor skills and developing better balance and coordination skills. By practicing dancing these skills are more reinforced and may better develop.',
    exploringLanguage:[
      {
        english: 'Legs',
        spanish: 'Piernas',
        french: 'Jambes'
      },
      {
        english:'Dance',
        spanish:'Bailar',
        french: 'Danser'
      },
      {
        english:'Country',
        spanish:'País',
        french: 'Pays'
      }
    ]
  },
  {
    exhibitName: 'Art',
    activityName: 'Kaleidoscope',
    theActivity: 'Malcolm the Robot gazes up at the exhibit and says, “Look into one of the kaleidoscopes at the base of the structure. Turn the wheel, what changes about what you see? Next, stand under the large kaleidoscope. Go stand under another kaleidoscope, is this one the same as the other or do they look different? Explain what you see and what you think I see.”',
    extendingTheActivity: 'This is a good time to articulate the different perspectives that people take and the categorical knowledge of children at this age. You may try to emphasize how the pictures look different in the big kaleidoscope and that the child’s manipulation of the image makes that change in the small kaleidoscope.',
    whatChildrenLearn: 'Children at this age are beginning to understand that others may see differently than them, because they have developed Theory of Mind. This activity reinforces the different perspectives others have and that we don’t all see and think the same things.',
    exploringLanguage:[
      {
        english: 'Large',
        spanish: 'Grande',
        french: 'Grand'
      },
      {
        english:'Kaleidoscope',
        spanish:'Caleidoscopio',
        french: 'Kaléidoscope'
      },
      {
        english:'Wheel',
        spanish:'Timón',
        french: 'Volant'
      }
    ]
  },
  {
    exhibitName: 'Art',
    activityName: 'The Case of the Missing Letter',
    theActivity: 'Malcolm the Robot goes over the whiteboard and puts up a few letters.  “Can you figure out what letter is missing? By looking at the incomplete word, try to figure out what the word is supposed to be and complete it.”',
    extendingTheActivity: 'You can make a word with any of the letters, like cat or fork, but leave out one letter. If the activity becomes too easy, try to leave out a few more letters and use a longer word.',
    whatChildrenLearn: 'Word completion is one aspect of intelligence that can be evaluated. This task involves rehearsing the child’s ability to mentally represent the word to fill in the blank. By doing this, the child is practicing the transfer of mental knowledge to the real world.',
    exploringLanguage:[
      {
        english: 'Whiteboard',
        spanish: 'Pizarra blanca',
        french: 'Tableau blanc'
      },
      {
        english:'Word',
        spanish:'Palabra',
        french: 'Mot'
      },
      {
        english:'Complete',
        spanish:'Completar',
        french: 'Remplir'
      }
    ]
  },
  {
    exhibitName: 'Art',
    activityName: 'How the Mind Wanders',
    theActivity: 'Malcolm the Robot goes over to all the toys.  “Pick a toy that you most like. Think about how you play with that toy. Explain to me what it is and four things or topics that are related to the toy you picked.”',
    extendingTheActivity: 'Tell the child to connect more words to the toy chosen. Also, when at home you can practice this task by asking your child to link topics related to a hobby or activity they enjoy doing. ',
    whatChildrenLearn: 'The children are using network model of memory. This means memory is viewed as an interconnected network, with information stored as a concept nodes connected by links.',
    exploringLanguage:[
      {
        english: 'Toy',
        spanish: 'Juguete',
        french: 'Jouet'
      },
      {
        english:'Play',
        spanish:'Jugar',
        french: 'Jouer'
      },
      {
        english:'Explain',
        spanish:'Explicar',
        french: 'Expliquer'
      }
    ]
  },
  {
    exhibitName: 'Art',
    activityName: 'Time to Draw!',
    theActivity: 'Malcolm the Robot enters into the Art Classroom. “What is your favorite animal at the zoo? Create a drawing of the animal you most like. When you are done, tell me about the animal’s body parts and what it’s doing in the picture.“',
    extendingTheActivity: 'Help the child create a more complex drawing by adding more animals to the artwork. You should draw the same animal as them so that you can compare the differences and explain them to the child.',
    whatChildrenLearn: 'During this age, children are developing mental representation. Depending on the type of drawing the child did. It can be determined how accurate and complexity of mental representation.',
    exploringLanguage:[
      {
        english: 'Animal',
        spanish: 'Animal',
        french: 'Animal'
      },
      {
        english:'Zoo',
        spanish:'Zoológico',
        french: 'Zoo'
      },
      {
        english:'Drawing',
        spanish:'Dibujo',
        french: 'Dessin'
      }
    ]
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'Who is faster?',
    theActivity: 'Malcolm the Robot asks you this question, “Whoa! You just ran against all of the animals in the “Animal Race.” I think that the turtle was the slowest and the parrot was the fastest, but that the rabbit was not as fast as the parrot. Is the rabbit faster or slower than the turtle?”',
    extendingTheActivity: 'It would make sense to ask similar questions for other animals. For example, you can insert another animal into the scenario, like a cheetah is faster than the rabbit, so is the cheetah faster than the turtle? You may want to use the “Animal Race” activity as a visual representation of the problem. This can help children visualize the scenario.',
    whatChildrenLearn: 'This is a practice of children’s logic skills. They should be developing the ability to use reason to make sense of a situation, such that with the given information, they can figure out which animal is faster or slower.',
    exploringLanguage:[
      {
        english: 'Turtle',
        spanish: 'Tortuga',
        french: 'Turtue'
      },
      {
        english:'Parrot',
        spanish:'Cotorra',
        french: 'Perroquet'
      },
      {
        english:'Rabbit',
        spanish:'Conejo',
        french: 'Lapin'
      }
    ]
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'At the Races',
    theActivity: 'Malcom the Robot says excitedly, “I can run as fast as the dog, but I want to know who else I can beat in a race. Which animal do you think I can beat in a race? Which animals do you think you can beat in a race?”',
    extendingTheActivity: 'Help your child make a prediction about how fast the various animals are. See if they can compare the speed of a pair of animals. You can ask them why they think some animals are faster than others.',
    whatChildrenLearn: 'Making predictions helps your child\'s innate understanding of science and nature. As they learn to make comparisons across different aspects (such as speed), children develop "mental models" to anticipate different outcomes in the world around them. This fosters further understanding of science and builds to more complex concepts.',
    exploringLanguage:[
      {
        english: 'Run',
        spanish: 'Correr',
        french: 'Courir'
      },
      {
        english:'Fast',
        spanish:'Rápido',
        french: 'Rapide'
      },
      {
        english:'Race',
        spanish:'Carrera',
        french: 'Course'
      }
    ]
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'How High?',
    theActivity: 'Malcolm the Robot notes, “I know that 1 foot is equal to 12 inches. I measured my height, and found that I am 1 foot and 2 inches high. How many inches is that? The average robot is about 11 inches high. Am I taller or shorter than the average robot? By how much? I want to know how tall you are. The average height for a child 4- to 6-years-old is 37 to 42 inches. Are you taller or shorter than the average child around your age?”',
    extendingTheActivity: 'Using hand gestures, show your child about how long a foot is compared to an inch. Ask them to tell you which one is bigger. Explain that 12 inches make one foot, then ask them to count up to 12 to show how many more inches are needed to make one foot.',
    whatChildrenLearn: 'Measurement is a skill set that takes time to develop in children. However, it is important to introduce them to the concepts of bigger and smaller as well as some of the names of the units. As they start to learn comparisons of length, they will eventually develop better concepts of what measuring entails.',
    exploringLanguage:[
      {
        english: 'Height',
        spanish: 'Estatura',
        french: 'Taille'
      },
      {
        english:'Inches',
        spanish:'Pulgadas',
        french: 'Pounces'
      },
      {
        english:'Child',
        spanish:'Niño',
        french: 'Enfant'
      }
    ]
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'How Strong?',
    theActivity: 'Malcolm the Robot exclaims, “Because I have arms of steel, I am fascinated by how strong people\'s hands are. I noticed the funny contraption that has a handle and chain, and that it makes a lever.  I tried to grab the handle and pull, but I can\'t quite manage. Can you show me how strong you are and grab the handle and pull it? What do you notice as you move the handle back and forth?”',
    extendingTheActivity: 'The position of the handle within the bar creates a lever. The farther the handle is moved, the longer the lever and the easier to pull up the weight. Ask your child to pull using a shorter lever and then with a longer lever. Ask them which one was easier to pull. Ask them if they\'ve ever played on a see-saw, a type of lever. It\'s easier to go up and down when you are farther down the see-saw than closer.',
    whatChildrenLearn: 'Piaget demonstrated that young children begin to think about scientific principles based on their real world experiences. When children interact with even simple science demonstrations, they build their knowledge base and begin to form concepts of how the world works. They may not know the formal names of things like "levers" but playing with such items allows them to start constructing scientific knowledge that they will use throughout development.',
    exploringLanguage:[
      {
        english: 'Arms',
        spanish: 'Brazos',
        french: 'Bras'
      },
      {
        english:'Handle',
        spanish:'Mango',
        french: 'Manche'
      },
      {
        english:'Chain',
        spanish:'Cadena',
        french: 'Chaîne'
      }
    ]
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'Stop that Ball!',
    theActivity: 'Malcolm the Robot excitedly exclaims, “My robot friends and I love sports. We often throw balls of steel into goals in a game a lot like soccer. I love to defend the goal from the steel-balls. See if you can be like me and stop the soccer balls from getting into the net. Don\'t let the soccer balls hit you!”',
    extendingTheActivity: 'Ask your child to guess how many soccer balls they\'ll stop. Ask them which is their left and right hands before they start. You can help them by telling them to move left or right to stop the oncoming soccer balls. See if they change what they are doing as more and more balls come at them on the screen.',
    whatChildrenLearn: 'Gross motor movements like running and jumping are children\'s natural way of exploring the world. As they become more coordinated, they will begin to learn to time their movements so they can stop a soccer ball or hit the baseball. Activities that keep children moving are also a great way to stimulate their brain activity and help them practice balance and speed.',
    exploringLanguage:[
      {
        english: 'Friends',
        spanish: 'Amigos',
        french: 'Copains'
      },
      {
        english:'Ball',
        spanish:'Balón',
        french: 'Ballon'
      },
      {
        english:'Soccer',
        spanish:'Fútbol',
        french: 'Football'
      }
    ]
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Lego Activity-egocentrism and motor skills',
    theActivity: 'Malcolm the Robot excitedly exclaims, “I love to play with Legos. I need your help building three towers of Legos. Now you should stand at one side and I should be on the opposite side of you. What do you think I see?”',
    extendingTheActivity: 'You can ask the child to make more towers and add them to the ones already made. This way you make it more difficult for them to determine what their friend is seeing.',
    whatChildrenLearn: 'Children here are being tested on egocentrism. Here, it can be seen if they have the ability to take another’s perspective. Motor skills are also assessed.',
    exploringLanguage:[
      {
        english: 'Love',
        spanish: 'Amor',
        french: 'Amour'
      },
      {
        english:'Building',
        spanish:'Construir',
        french: 'Bâtiment'
      },
      {
        english:'Towers',
        spanish:'Torres',
        french: 'Tour'
      }
    ]
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Where will it go?',
    theActivity: 'Malcolm the Robot notes that inside the construction area are the air vacuum and balls. Malcolm begins to put the ball into the side vacuum. Malcolm the Robot asks, “Where will the ball land? What happens next? Draw a diagram to show me what happens.”',
    extendingTheActivity: 'Children can draw other paths that objects may take to extend the activity. For example, you may ask the children to draw the path of the paper airplane inside that exhibit.',
    whatChildrenLearn: 'Children practice their drawing skills, which are important to their development. This can also help with mapping skills, because children are practicing their abilities to transfer the real life scenario onto paper (or the app).',
    exploringLanguage:[
      {
        english: 'Inside',
        spanish: 'Adentro',
        french: 'Intérieur'
      },
      {
        english:'Air',
        spanish:'Aire',
        french: 'Air'
      },
      {
        english:'Diagram',
        spanish:'Diagrama',
        french: 'Diagramme'
      }
    ]
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Twinkle Star Theater',
    theActivity: 'Malcolm the Robot asks, “I want to know who your favorite movie or TV show character is, or what you want to be when you grow up. Dress yourself like it and then show me by acting in a play.”',
    extendingTheActivity: 'You can create a second scene that connects with the first one that the child created and join them.',
    whatChildrenLearn: 'By doing this activity, children are practicing sociodramatic play. Children are able to explore the roles people have in the real world. It also shows the symbolic skills they are developing.',
    exploringLanguage:[
      {
        english: 'Movie',
        spanish: 'Película',
        french: 'Film'
      },
      {
        english:'Character',
        spanish:'Personaje',
        french: 'Personnage'
      },
      {
        english:'Acting',
        spanish:'Actuar',
        french: 'Jeu'
      }
    ]
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Piloting a Boat',
    theActivity: 'Malcolm the Robot states, “I’ve always wanted to drive a boat. Luckily, there is a boat that you can drive on the computer. Once you’ve completed the course, tell me about how you did and how you can improve.”',
    extendingTheActivity: 'This activity can be carried into many activities in everyday life. When a child performs a task in a new and different way, you may ask them why they did that or how they came up with a new procedure.',
    whatChildrenLearn: 'Metacognition is thinking about thinking. This skill is greatly developing in children at this age and this activity enables children to hone in on this developing skill.',
    exploringLanguage:[
      {
        english: 'Boat',
        spanish: 'Bote',
        french: 'Bateau'
      },
      {
        english:'Drive',
        spanish:'Conducir',
        french: 'Conduire'
      },
      {
        english:'Computer',
        spanish:'Computadora',
        french: 'Ordinateur'
      }
    ]
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Hidden Treasure',
    theActivity: 'Malcolm the Robot excitedly exclaims, “I love to explore and discover. Let’s see if we can find the hidden treasure on the beach. Help me find pieces of gold and an antique pirate jar to bring to the history museum. The island is named after the legendary Spanish pirate Jose Gaspar "the last of the Buccaneers.',
    extendingTheActivity: 'Here the child is pretending to uncover hidden treasure. Help your child identify all the items they find and use efficient searching strategies to uncover the two needed items. After the two needed items are uncovered, play with your child to see what else they can uncover and then cover the items again for future explorers to find.',
    whatChildrenLearn: 'This activity works with the child\'s development of both goal-oriented and imaginative play. Around this age, attention and memory abilities are starting to become more refined. The searching behavior may require the use of efficient planning, searching strategies, and attention control to find the items needed.',
    exploringLanguage:[
      {
        english: 'Explore',
        spanish: 'Explorar',
        french: 'Explorer'
      },
      {
        english:'Beach',
        spanish:'Playa',
        french: 'Plage'
      },
      {
        english:'Spanish',
        spanish:'Español',
        french: 'Espagnol'
      }
    ]
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Sailing, Sailing',
    theActivity: 'Malcolm the Robot says, “I am curious how to get to Cozumel, which is I the Caribbean Sea. Go to the "helm" (the ship\'s steering mechanism) and use the ship\'s wheel and radar, which really stands for "Radio Detecting And Ranging," to show me the 585 mile trip to travel from Tampa, Florida, to Cozumel, Mexico.',
    extendingTheActivity: 'Using the black touchpad, help your child select Cozumel as the destination for the cruise. Work with your child to guide the boat from it\'s starting location in Tampa to the Cozumel. Have your child work out the best route to get to the end point in the most direct manner. Notice you can also take the ship to New Orleans and Cayman Islands, you can use this to ask your child to predict what location is closest to Tampa and what is farthest.',
    whatChildrenLearn: 'Early in development, young children\'s spatial abilities sharpen. They begin to understand directions (left, right, up, down) as well as understand how maps can be representations of real places. Eventually they will do more complex representation skills such as creating detailed directions and drawing maps of places they have been.',
    exploringLanguage:[
      {
        english: 'Sea',
        spanish: 'Mar',
        french: 'Mer'
      },
      {
        english:'Ship',
        spanish:'Barco',
        french: 'Bateau'
      },
      {
        english:'Trip',
        spanish:'Viaje',
        french: 'Voyage'
      }
    ]
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Ahoy, There!',
    theActivity: 'Malcolm the Robot notes that, “I have noticed a telescope on the edge of the ship. I love exploring and am fascinated with how a telescope can see things so far away. Using the eyepiece to look through the optical tube of the telescope, can you find the image of the parrot on the far wall of museum?”',
    extendingTheActivity: 'The telescope allows the child to explore the environment around the museum. Point out the eyepiece, optical tube, and other parts of the telescope. Help your child locate and identify the picture of a parrot we have placed in the letter O of the word "Kidsport" on the far wall of the museum. You can help your child focus the telescope with the two focusers, the one closest to the eyepiece is for quick focus while the second one is for making finer adjustments to the image. Ask them to look far without the telescope and describe the difference.',
    whatChildrenLearn: 'Looking through two lenses allows us to see things get big then small. Even though children see the images change from their normal size to either really large or really small, they understand that the object\'s size hasn\'t really changed. This idea, known as size constancy, is important for our brain to understand distance and depth perception.',
    exploringLanguage:[
      {
        english: 'Telescope',
        spanish: 'Telescopio',
        french: 'Télescope'
      },
      {
        english:'Image',
        spanish:'Imagen',
        french: 'Image'
      },
      {
        english:'Museum',
        spanish:'Museo',
        french: 'Musée'
      }
    ]
  },
  {
    exhibitName: 'Water Area',
    activityName: "What's Down There?",
    theActivity: 'Malcolm the Robot says, “Because I’m made out of steel, I cannot go into the ocean and do not know a lot about life under water. I really want to learn about different objects and sea life. Using the ultrasound and underwater cameras, help me discover three living things under the sea.”',
    extendingTheActivity: 'There is a loop in the underwater videos, every few minutes the video of underwater life changes. Please have your child view the underwater video, resume play in another area of the ship, then return to view a new image. The underwater ultrasound allows the child to see habitats and animals undersea. Ask your child to identify different underwater animals. Do they think these animals could live on land? Why or why not? Ask your child to think about whether they could live in the sea. What would they need?',
    whatChildrenLearn: 'Exploring other ecosystems and their living creatures is familiar to children. Naming animals is a common early knowledge category they develop. They refine these categories as they learn more attributes of each animal and where they live. Such early identification and classification will develop into more complex understanding of scientific categories.',
    exploringLanguage:[
      {
        english: 'Ocean',
        spanish: 'Oceano',
        french: 'Océan'
      },
      {
        english:'Water',
        spanish:'Agua',
        french: 'Eau'
      },
      {
        english:'Life',
        spanish:'Vida',
        french: 'Vie'
      }
    ]
  }
];

function getActivity (activityName) {
  var activity = activities.filter(
      function(activities){
        return activities.activityName === activityName;
      }
  );
  return activity[0];
}

class Activity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rating: "notRated"
    }
    this.nextPage= this.nextPage.bind(this);
    this.setRating= this.setRating.bind(this);
  }

  nextPage () {
    if (this.state.rating !== "notRated"){
      this.props.changePage('Quiz');
    } else{
      alert("Please rate this activity.")
    }
  }

  setRating (e) {
    //e.currentTarget.style.border = '#a9a9a9 3px solid'
    this.setState({rating:e.currentTarget.value});
  }

  render(){
    return(
      <div>
        <Grid>
          <SectionTitle text={getActivity(this.props.activity).activityName}/>
          <hr/>
          <Collapsible header="The Activity" bsStyle="success" open={true} body={getActivity(this.props.activity).theActivity}/>
          <hr/>
          <Collapsible header="What Children Learn" bsStyle="danger" open={true} body={getActivity(this.props.activity).whatChildrenLearn}/>
          <hr/>
          <Collapsible header="Extending The Activity" bsStyle="warning" open={false} body={getActivity(this.props.activity).extendingTheActivity}/>
          <hr/>
          <ExploringLanguage heading="Exploring Language" bsStyle="info" open={false} languageContent={getActivity(this.props.activity).exploringLanguage}/>
          <hr/>
          <h3>How did you feel about this activity?</h3>
          <ButtonGroup>
            <Button className="activity-rating-button" value="like" onClick={this.setRating}><FontAwesome className="activity-rating" name='smile-o' /><br/>I Liked it</Button>
            <Button className="activity-rating-button" value="ok" onClick={this.setRating}><FontAwesome className="activity-rating" name='meh-o' /><br/>It was OK</Button>
            <Button className="activity-rating-button" value="dislike" onClick={this.setRating}><FontAwesome className="activity-rating" name='frown-o' /><br/>I Disliked it</Button>
          </ButtonGroup>
          <hr/>
        </Grid>
        <Button bsStyle="success" bsSize="large" onClick={this.nextPage}>What's Next?</Button>
      </div>
    );
  }
}

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.getIcon= this.getIcon.bind(this);
  }

  componentDidMount(){
    if(this.props.open){
      this.setState({open:true})
    }
  }

  getIcon (){
    if (this.state.open) {
      return (<Glyphicon className="pull-right" glyph="chevron-up" />);
    }
    return (<Glyphicon className="pull-right" glyph="chevron-down" />);
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} block onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.header}
          {this.getIcon()}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Alert bsStyle={this.props.bsStyle} className="lang-container">
              {this.props.body}
            </Alert>
          </div>
        </Collapse>
      </div>
    );
  }
}

class SectionTitle extends Component {
  render () {
    return <h2 className="explore-no-margin">{this.props.text}</h2>;
  }
}

class ExploringLanguage extends Component {
  render () {
    var langList = this.props.languageContent.map(function(word) {
      return (
        <ListGroup className="lang-list" key={word.english}>
          <ListGroupItem><strong>English:</strong> {word.english}</ListGroupItem>
          <ListGroupItem><strong>Spanish:</strong> {word.spanish}</ListGroupItem>
          <ListGroupItem><strong>French:</strong> {word.french}</ListGroupItem>
        </ListGroup>
      );
    });

    return (
      <Collapsible header={this.props.heading} bsStyle={this.props.bsStyle} open={this.props.open} body={langList}/>
    );
  }
}

export default Activity;