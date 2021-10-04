import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villian-selector',
  templateUrl: './villian-selector.component.html',
  styleUrls: ['./villian-selector.component.scss']
})
export class VillianSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  villians = [
    { id: 1, name: 'Neff', power: 'Sorcery', imgUrl: '/assets/images/neff.jpg', buttonText: 'Welcome', saying: 'To Your Doom' },
    {
      id: 2, name: 'Michael Corleone', power: 'Goons',
      imgUrl: '/assets/images/michaelcorleone.jpg', buttonText: `It's not personal`, saying: `It's business`
    },
    {
      id: 3, name: 'T-1000', power: 'Mimetic Pollyalloy',
      imgUrl: '/assets/images/t1000.jpg', buttonText: 'Say...', saying: `That's a nice bike`
    },
    {
      id: 5, name: 'Eggman', power: 'Crazy Machines',
      imgUrl: '/assets/images/eggman.png', buttonText: 'Glad you could make it!', saying: 'To Your Funeral'
    },
    {
      id: 6, name: 'Infinite', power: 'Phantom Ruby',
      imgUrl: '/assets/images/infinite.png', buttonText: 'Everything is Infinite', saying: 'Especially your pain'
    },
    {
      id: 7, name: 'Nolan', power: 'His Fists',
      imgUrl: '/assets/images/nolan.png', buttonText: 'Welcome To Your Doom.  And I will Punch You.', saying: 'In the face!'
    },
    {
      id: 8, name: 'Jonas', power: 'A Chessboard',
      imgUrl: '/assets/images/jonas.png', buttonText: 'Enter', saying: 'At Your Own Risk'
    },
    {
      id: 9, name: 'Bridget', power: 'A Deadly Yardstick',
      imgUrl: '/assets/images/bridget.png', buttonText: 'I want your measurements!', saying: 'Of your pain!'
    },
    {
      id: 10, name: 'Darth Vader', power: 'The Dark Side of the Force',
      imgUrl: '/assets/images/vader.jpg', buttonText: `If you're not with me...`,
      saying: `you are...ummmm...sorry, I lost my train of thought.`
    },
    {
      id: 11, name: 'Sonic', power: ` -- wait, Sonic is a good guy.  He shouldn't be on this list!`,
      imgUrl: '/assets/images/sonic.png', buttonText: 'Hello!',
      saying: `Why are you looking me like that?  It's like I'm going to destroy you or something.`
    },
    {
      id: 12, name: 'Evil Snowman', power: `...ummm...big stick hands, I guess.`,
      imgUrl: '/assets/images/evilsnowman.jpg', buttonText: `Let it snow let it snow`,
      saying: `welcome to your doom.  I know that doesn't rhyme, but my brain is mostly water.`
    },
    {
      id: 13, name: 'Shadow', power: ` -- hold on -- is Shadow even a bad guy?`,
      imgUrl: '/assets/images/shadow.jpg', buttonText: 'Am I a bad guy, you ask?',
      saying: `Maybe you'll find out after 6 more sequels.`
    },
    {
      id: 14, name: 'Classic Sonic',
      power: `spin dash, if he has that ability in this particular game. You never know.`,
      imgUrl: '/assets/images/classicSonic.png', buttonText: '...', saying: `..........`
    },
    {
      id: 15, name: 'Ultron', power: `Falling Cities`, imgUrl: '/assets/images/ultron.jpg',
      buttonText: 'Ha ha ha ha ha', saying: `...ughhh...you had to pick THIS picture.  You will pay for that.`
    },
    {
      id: 16, name: 'Garbage Can', power: `Garbage.  What else would it be, genius?`,
      imgUrl: '/assets/images/garbageCan.jpg', buttonText: 'Mwha ha ha ha ha', saying: `...ugh...P U...I stink`
    },
    {
      id: 17, name: 'Spuds MacKenzie', power: `Very disgusting beer`,
      imgUrl: '/assets/images/SpudsBridget.jpg', buttonText: 'He ran out of luck', saying: `And got hit by a truck`
    },
    {
      id: 18, name: 'Spuds MacKenzie', power: `...he ran out of luck and got hit by a truck!`,
      imgUrl: '/assets/images/SpudsJonas.jpg', buttonText: 'PARTY!!!', saying: `'s over, Spuds.`
    },
    {
      id: 19, name: 'Evil Gnome', power: `His gnome gun.  Which is like a regular gun, but a gnome gun.`,
      imgUrl: '/assets/images/evilGnome.jpg', buttonText: `His gun`, saying: `does not work (it is, after all, just a lawn ornament)`
    },
    {
      id: 20, name: 'Noone', power: `His hat, I guess??`,
      imgUrl: '/assets/images/noOne.JPG', buttonText: `Take...`, saying: `him apart!  Because he's Lego.`
    },
    {
      id: 21, name: 'Ender Dragon', power: `The fact that it will never be destroyed.  Unless it is.`,
      imgUrl: '/assets/images/Ender-Dragon-Minecraft.jpg', buttonText: `Rooooooooooooaaaaaaaaaaaaaaarrrrrrrrrrrrrrrr`,
      saying: `Oh no!  You have a bow!`
    },
    {
      id: 22, name: 'Evil Vacuum', power: `Suction (evil suction, that is)`,
      imgUrl: '/assets/images/EvilVacuum.jpg', buttonText: `Press To Turn the Vacuum On. :)  I promise I will be good. :)`,
      saying: `MWAHAHAHAHAHA, I tricked you.  I'm totally going to be evil!`
    },
    {
      id: 23, name: 'Evil TV', power: `Scary cartoons`,
      imgUrl: '/assets/images/EvilTv.jpg', buttonText: `Get ready for some scary...`,
      saying: `...disappointment.  These cartoons aren't scary -- they're just bad and will rot your brain.  MWAHAHAHAHAHA.`
    },
    {
      id: 24, name: 'Haunted House', power: `Haunted House (what else?!?!?!)`,
      imgUrl: '/assets/images/HauntedHouse.jpg', buttonText: `Haunted`,
      saying: `...House??`
    },
    {
      id: 25, name: 'Grond', power: `some kind of awesome battering ram.  Can't think of the name right now.
    But it's awesome.  And it will destroy.  You.`,
      imgUrl: '/assets/images/Grond.JPG', buttonText: `Grond`,
      saying: `Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.
    Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.
    Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.
    Grond.  Grond.  Grond.  Still can't think of the name, by the way.  But I'll let you know when I think of it.`},

    {
      id: 26, name: 'Evil Beer', power: `Poisonous Beer (the beer that it is -- not like, a different beer that this beer somehow has.
      Because that would be weird. And ridiculous.  A beer with another beer?  Like I said, dumb).`,
      imgUrl: '/assets/images/EvilBeer.jpg', buttonText: `Drink Me!  I'm definitely not poisonous! :)`,
      saying: `I'M TOTALLY POISONOUS!!!!`
    },

    {
      id: 27, name: 'Evil Fireman', power: `...I mean make you drown with ...ummm... WATER ... of course!  What else
     would an evil fireman use?  Fire?  NOOO.  Bad answer.  It's clearly water.`,
      imgUrl: '/assets/images/EvilFireman.jpg', buttonText: `RELEASE THE WATER!!!!!!`,
      saying: `I said "RELEASE THE WATER!!!!!!" ummmm.... How come you're not terrifed?`
    },

    {
      id: 25, name: 'Evil Storm Cloud', power: `Lightning`,
      imgUrl: '/assets/images/EvilStormCloud.jpg', buttonText: `Click here to...`,
      saying: `be struck by lightning!  By the way, the picture is awesome, and I totally did that on purpose.`
    },

    {
      id: 26, name: 'Evil Alphabet', power: `making you learn the alphabet ................................ WRONG!  MWAHAHHAHAHHA`,
      imgUrl: '/assets/images/EvilAlphabet.jpg', buttonText: `A B C D`,
      saying: `O O M`
    },

    {
      id: 27, name: 'Metal Sonic', power: `the same method as regular Sonic.  Except regular Sonic wouldn't try to destroy you.`,
      imgUrl: '/assets/images/metalSonic.png', buttonText: `BEGIN DESTRUCTION`,
      saying: `ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR
    ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR
    ERROR ERROR ERROR ERROR ERROR ERROR`},

    {
      id: 28, name: 'Inky', power: `Who knows?  It depends on where Clyde is.`,
      imgUrl: '/assets/images/inky.gif', buttonText: `ATTACK!!!!`,
      saying: `....hold on a sec...Clyde?  Where are you? Hopefully not eaten.  Oh, you were eaten. :(`
    },

    {
      id: 31, name: 'Blinky', power: `Crashing Into You?`,
      imgUrl: '/assets/images/blinky.gif', buttonText: `Go on, eat that Pac dot.  It'll definitely help.`,
      saying: `Hah!  I tricked you, I'm faster now!  Wait -- stop avoiding those other ones!`
    },

    {
      id: 32, name: 'Pinky', power: `Hitting a Wall and Knocking Herself Out?`,
      imgUrl: '/assets/images/pinky.gif', buttonText: `I HAVE YOU`,
      saying: `Arghhhhhh............{Crash!}`
    },

    {
      id: 33, name: 'Clyde', power: `Doing his own random thing, unless you have a power pellet, in which case he'll retreat`,
      imgUrl: '/assets/images/Clyde.gif', buttonText: `READY ... SET ...`,
      saying: `RETREAT!!!!!!!!`
    },

    {
      id: 34, name: 'Thanos', power: `A very powerful weapon.  You'll never, ever, EVER guess what it is.`,
      imgUrl: '/assets/images/thanos.jpg', buttonText: `GUESS WHAT IT IS`,
      saying: `...A BIG ROCK! -- what did you exepect?  Some kind of glove?  Yeah right, like a glove is threatening.`
    },

    {
      id: 35, name: 'Screen Slaver', power: `screens.  That's right, screens.`,
      imgUrl: '/assets/images/screenslaver.png', buttonText: `Look into the screen`,
      saying: `Are you destroyed yet?  No?  Hmmmm....Look harder.`
    },

    {
      id: 36, name: 'The Underminer', power: `ummm...wait, what will he destroy you with?  A drill?
    No, not a drill, definitely not a drill.  A stick?  No, of course not.  That's a terrible idea.
    Wait, one more.  Definitely, definitely...oh no, run for your lives!`,
      imgUrl: '/assets/images/underminer.jpg', buttonText: `Behold`,
      saying: `The Underminer!`
    },

    {
      id: 37, name: 'Disney Princesses', power: `Shameless self promotion`,
      imgUrl: '/assets/images/disneyprincesses.jpg', buttonText: `Behold`,
      saying: `The Shamelessness!`
    },

    {
      id: 38, name: 'Calvin', power: `water baloons?`,
      imgUrl: '/assets/images/calvin.png', buttonText: `Anyway`,
      saying: `, Calvin's not a villian, so let's just get back to this`
    },

    {
      id: 38, name: 'Stupendous Man', power: `...umm...nobody knows.`,
      imgUrl: '/assets/images/stupendousman.png', buttonText: `So`,
      saying: `...ummm...whatever.`
    },

    {
      id: 39, name: 'Pandy', power: `Pretending to be real`,
      imgUrl: '/assets/images/Pandy.jpg', buttonText: `Am I real?`,
      saying: `No? You're not imagining hard enough.`
    },

    {
      id: 40, name: 'Moe', power: `his big ugly fists`,
      imgUrl: '/assets/images/Moe.png', buttonText: `click here to ask him a question`,
      saying: `uhh...(KAPOW!!!)`
    }

  ];

  selectedVillian = this.villians[-1];

  message = '';

  selectVillian(villian: any) {
    this.selectedVillian = villian;
    this.message = '';
  }

  sayHello() {
    this.message = this.selectedVillian.saying;
  }

}
