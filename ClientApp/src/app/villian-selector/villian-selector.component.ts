import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VillianService } from '../villian-service';
import { Villian } from '../villian'

@Component({
  selector: 'app-villian-selector',
  templateUrl: './villian-selector.component.html',
  styleUrls: ['./villian-selector.component.scss']
})
export class VillianSelectorComponent implements OnInit {

  public villians: Villian[];

  public selectedVillian(): Villian | undefined {
    return this.villianService.selectedVillian;
  }

  public select(villian: Villian) {
    this.villianService.selectedVillian = villian;
  }

  public edit(villian: Villian) {
    this.villianService.selectedVillian = villian;
    this.router.navigate(['/', 'Edit']);
  }

  public flip(villian: Villian) {
    villian.flipped = !villian.flipped;
  }

  public getImageUrl(villian: Villian) {
    return `/api/image/get/${villian.imageName}`;
  }

  constructor(
    protected villianService: VillianService,
    private router: Router
    ) {

    this.villians = [];

    let onSuccess = (result: Villian[]) => {
      this.villians = result;
    };

    let onError = () => { };

    villianService.GetAll(onSuccess, onError);

  }

  ngOnInit(): void {
  }

  /*villians: Villian[] = [
    { id: "", name: 'Neff', powers: 'Sorcery', imgUrl: '/assets/images/neff.jpg', buttonText: 'Welcome', saying: 'To Your Doom' },
    {
      id: "2", name: 'Michael Corleone', powers: 'Goons',
      imgUrl: '/assets/images/michaelcorleone.jpg', buttonText: `It's not personal`, saying: `It's business`
    },
    {
      id: "3", name: 'T-1000', powers: 'Mimetic Pollyalloy',
      imgUrl: '/assets/images/t1000.jpg', buttonText: 'Say...', saying: `That's a nice bike`
    },
    {
      id: "", name: 'Eggman', powers: 'Crazy Machines',
      imgUrl: '/assets/images/eggman.png', buttonText: 'Glad you could make it!', saying: 'To Your Funeral'
    },

    {
      id: "", name: 'Classic Eggman', powers: 'Minions',
      imgUrl: '/assets/images/classicEggman.png', buttonText: 'Minions, Attack!', saying: 'Minions? Oh, they\'re all destroyed.'
    },

    {
      id: "", name: 'Nolan', powers: 'His Fists',
      imgUrl: '/assets/images/nolan.png', buttonText: 'Welcome To Your Doom.  And I will Punch You.', saying: 'In the face!'
    },


    {
      id: "", name: 'Evil Snowman', powers: `...ummm...big stick hands, I guess.`,
      imgUrl: '/assets/images/evilsnowman.jpg', buttonText: `Let it snow let it snow`,
      saying: `welcome to your doom.  I know that doesn't rhyme, but my brain is mostly water.`
    },

    {
      id: "", name: 'Ultron', powers: `Falling Cities`, imgUrl: '/assets/images/ultron.jpg',
      buttonText: 'Ha ha ha ha ha', saying: `...ughhh...you had to pick THIS picture.  You will pay for that.`
    },
    {
      id: "", name: 'Garbage Can', powers: `Garbage.  What else would it be, genius?`,
      imgUrl: '/assets/images/garbageCan.jpg', buttonText: 'Mwha ha ha ha ha', saying: `...ugh...P U...I stink`
    },
    {
      id: "", name: 'Spuds MacKenzie', powers: `Very disgusting beer`,
      imgUrl: '/assets/images/SpudsBridget.jpg', buttonText: 'He ran out of luck', saying: `And got hit by a truck`
    },
    {
      id: "", name: 'Spuds MacKenzie', powers: `...he ran out of luck and got hit by a truck!`,
      imgUrl: '/assets/images/SpudsJonas.jpg', buttonText: 'PARTY!!!', saying: `'s over, Spuds.`
    },
    {
      id: "", name: 'Evil Gnome', powers: `His gnome gun.  Which is like a regular gun, but a gnome gun.`,
      imgUrl: '/assets/images/evilGnome.jpg', buttonText: `His gun`, saying: `does not work (it is, after all, just a lawn ornament)`
    },
    {
      id: "", name: 'Noone', powers: `His hat, I guess??`,
      imgUrl: '/assets/images/noOne.JPG', buttonText: `Take...`, saying: `him apart!  Because he's Lego.`
    },

    {
      id: "", name: 'Evil Vacuum', powers: `Suction (evil suction, that is)`,
      imgUrl: '/assets/images/EvilVacuum.jpg', buttonText: `Press To Turn the Vacuum On. :)  I promise I will be good. :)`,
      saying: `MWAHAHAHAHAHA, I tricked you.  I'm totally going to be evil!`
    },
    {
      id: "", name: 'Evil TV', powers: `Scary cartoons`,
      imgUrl: '/assets/images/EvilTv.jpg', buttonText: `Get ready for some scary...`,
      saying: `...disappointment.  These cartoons aren't scary -- they're just bad and will rot your brain.  MWAHAHAHAHAHA.`
    },

    {
      id: "", name: 'Grond', powers: `some kind of awesome battering ram.  Can't think of the name right now.
    But it's awesome.  And it will destroy.  You.`,
      imgUrl: '/assets/images/Grond.JPG', buttonText: `Grond`,
      saying: `Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond.  Grond. Grond.  Grond.  Grond.  Still can't think of the name, by the way.  But I'll let you know when I think of it.`
    },

    {
      id: "", name: 'Evil Fireman', powers: `...I mean make you drown with ...ummm... WATER ... of course!  What else would an evil fireman use?  Fire?  NOOO.  Bad answer.  It's clearly water.`,
      imgUrl: '/assets/images/EvilFireman.jpg', buttonText: `RELEASE THE WATER!!!!!!`,
      saying: `I said "RELEASE THE WATER!!!!!!" ummmm.... How come you're not terrifed?`
    },

    {
      id: "", name: 'Evil Alphabet', powers: `making you learn the alphabet ................................ WRONG!  MWAHAHHAHAHHA`,
      imgUrl: '/assets/images/EvilAlphabet.jpg', buttonText: `A B C D`,
      saying: `O O M`
    },

    {
      id: "", name: 'Metal Sonic', powers: `the same method as regular Sonic.  Except regular Sonic wouldn't try to destroy you.`,
      imgUrl: '/assets/images/metalSonic.png', buttonText: `BEGIN DESTRUCTION`,
      saying: `ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR`
    },

    {
      id: "", name: 'Inky', powers: `Who knows?  It depends on where Clyde is.`,
      imgUrl: '/assets/images/inky.gif', buttonText: `ATTACK!!!!`,
      saying: `....hold on a sec...Clyde?  Where are you? Hopefully not eaten.  Oh, you were eaten. :(`
    },

    {
      id: "", name: 'Blinky', powers: `Crashing Into You?`,
      imgUrl: '/assets/images/blinky.gif', buttonText: `Go on, eat that Pac dot.  It'll definitely help.`,
      saying: `Hah!  I tricked you, I'm faster now!  Wait -- stop avoiding those other ones!`
    },

    {
      id: "", name: 'Pinky', powers: `Hitting a Wall and Knocking Herself Out?`,
      imgUrl: '/assets/images/pinky.gif', buttonText: `I HAVE YOU`,
      saying: `Arghhhhhh............{Crash!}`
    },

    {
      id: "", name: 'Clyde', powers: `Doing his own random thing, unless you have a power pellet, in which case he'll retreat`,
      imgUrl: '/assets/images/Clyde.gif', buttonText: `READY ... SET ...`,
      saying: `RETREAT!!!!!!!!`
    },

    {
      id: "", name: 'Thanos', powers: `A very powerful weapon.  You'll never, ever, EVER guess what it is.`,
      imgUrl: '/assets/images/thanos.jpg', buttonText: `GUESS WHAT IT IS`,
      saying: `...A BIG ROCK! -- what did you exepect?  Some kind of glove?  Yeah right, like a glove is threatening.`
    },

    {
      id: "", name: 'Screen Slaver', powers: `screens.  That's right, screens.`,
      imgUrl: '/assets/images/screenslaver.png', buttonText: `Look into the screen`,
      saying: `Are you destroyed yet?  No?  Hmmmm....Look harder.`
    },

    {
      id: "", name: 'Disney Princesses', powers: `Shameless self promotion`,
      imgUrl: '/assets/images/disneyprincesses.jpg', buttonText: `Behold`,
      saying: `The Shamelessness!`
    },

    {
      id: "", name: 'Pandy', powers: `Pretending to be real`,
      imgUrl: '/assets/images/Pandy.jpg', buttonText: `Am I real?`,
      saying: `No? You're not imagining hard enough.`
    },

    {
      id: "", name: 'Moe', powers: `his big ugly fists`,
      imgUrl: '/assets/images/Moe.png', buttonText: `click here to ask him a question`,
      saying: `uhh...(KAPOW!!!)`
    },

    {
      id: "", name: 'Voldermort', powers: `Magic? No, that's too obvious`,
      imgUrl: '/assets/images/voldemort.jpg', buttonText: `Click here to reveal the creative way he will destroy you`,
      saying: `A gun. Yeah, that's right -- he's going to shoot you. Sure, it's not creative. But on the other hand, it works.`
    },

  ];
  */



}
