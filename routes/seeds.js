//currently not using this file. But these are my seeds

// var db = process.env.MONGODB_URI || "mongodb://localhost/angulix";
// mongoose.connect(db);

// var Movie = require('./models/movieModel');

// var movie1 = new Movie({
//   Title: "Titanic", Year: "1997", Poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg", Plot: "Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio.", Genre: "Drama"
// })
// var movie2 = new Movie({
//   Title: "10 Things I Hate About You", Year: "1999", Poster: "https://www.thefashionisto.com/wp-content/uploads/2015/04/10-Things-I-Hate-About-You-Movie-Poster-800x1200.jpg", Plot: " Kat Stratford (Julia Stiles) is beautiful, smart and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca (Larisa Oleynik), house rules say that she can't date until Kat has a boyfriend, so strings are pulled to set the dour damsel up for a romance. Soon Kat crosses paths with handsome new arrival Patrick Verona (Heath Ledger). Will Kat let her guard down enough to fall for the effortlessly charming Patrick?" 
// })

// movie1.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie2.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// var movie3 = new Movie({
//   Title: "Beauty and The Beast", Year: "2017", Poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/tWqifoYuwLETmmasnGHO7xBjEtt.jpg", Plot: "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young prince, imprisoned in the form of a beast, can be freed only by true love. What may be his only opportunity arrives when he meets Belle, the only human girl to ever visit the castle since it was enchanted.", Genre: "Family"
// })
// var movie4 = new Movie({
//   Title: "There Will Be Blood", Year: "2008", Poster: "http://is5.mzstatic.com/image/thumb/Video2/v4/62/dc/23/62dc2390-4974-d377-1552-abd981427cbb/source/1200x630bb.jpg", Plot: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.", Genre: "Drama"
// })

// movie3.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie4.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// var movie5 = new Movie({
//   Title: "Die Hard", Year: "1988", Poster: "./assests/DieHard.jpg", Plot: "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But when the high rise is taken hostage, only John McClane can save the day.", Genre: "Action"
// })
// var movie6 = new Movie({
//   Title:"How the Grinch Stole Christmas", Year: "2000", Poster: "./assests/the-grinch-poster.width-600.jpg", Plot: "Reluctantly joined by his hapless dog, Max, the Grinch comes down from his mountaintop home and sneaks into town to swipe everything holiday-related from the Whos. However, the bitter grump finds a hitch in his plans when he encounters the endearing Cindy Lou Who. Based off of the fame novel written by Dr. Suess", Genre: "Children"
// })
// var movie7 = new Movie({
//   Title:"She's All That", Year: "1999", Poster: "./assests/shesallthat.jpg", Plot: "A high school jock makes a bet that he can turn an unattractive girl into the school's prom queen.", Genre: "Comedy"
// })
// var movie8 = new Movie({
//   Title:"The Disaster Artist", Year: "2017", Poster: "./assests/the-disaster-artist-poster.jpg", Plot: "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true, creating the bestn worst filem ever", Genre: "Comedy"
// })
// var movie9 = new Movie({
//   Title:"Wonder Woman", Year: "2017", Poster: "./assests/WonderWoman.jpg", Plot: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.", Genre: "Action"
// })
// var movie10 = new Movie({
//   Title:"Aladdin", Year: "1992", Poster: "./assests/ALADDIN-1S-2.jpg", Plot: "When a street urchin vies for the love of a beautiful princess, he uses a genie's magic power to make himself off as a prince in order to marry her.", Genre: "Children"
// })
// var movie11 = new Movie({
//   Title:"The Lion King", Year: "1994", Poster: "./assests/lionking.jpg", Plot: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.", Genre: "Children"
// })
// var movie12 = new Movie({
//   Title:"Bridesmaids", Year: "2011", Poster: "./assests/bridesmaids-movie.jpg", Plot: "Her best friend Lillian is getting married. Though lovelorn and almost penniless, Annie, nevertheless, winds her way through the strange and expensive rituals associated with her job as the bride's go-to gal, but things dion't go according to plan.", Genre: "Comedy"
// })
// var movie13 = new Movie({
//   Title:"True Grit", Year: "2010", Poster: "./assests/truegrit.jpg", Plot: "A rebellious teenager enlists the help of a US Marshall to track down her fathers murderer", Genre: "Western"
// })
// var movie14 = new Movie({
//   Title:"How to Lose A Guy in 10 Days", Year: "2003", Poster: "./assests/loseaguy.jpg", Plot: "Andie Anderson's new column, find a guy to make her fall in love with her, and then ditch him. Ben, has other plans though. Neither expect what happens next.", Genre: "Romantic Comedy"
// })
// var movie15 = new Movie({
//   Title:"St. Elmo's Fire", Year: "1985", Poster: "./assests/stelemo.jpg", Plot: "A group of friends, just out of college, struggle with adulthood", Genre: "Drama"
// })
// var movie16 = new Movie({
//   Title:"Clerks", Year: "1994", Poster: "./assests/clerks.jpg", Plot: "A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof.", Genre: "Comedy"
// })
// var movie17 = new Movie({
//   Title:"Chasing Amy", Year: "1997", Poster: "./assests/chasingamy.jpg", Plot: "Holden is a up and coming comic book writer. When he meets Amy, he falls hard, and even harder when he learns that she is a lesbian.", Genre: "Comedy"
// })
// var movie18 = new Movie({
//   Title:"Kissing Jessica Stein", Year: "2001", Poster: "./assests/kissingjessica.jpg", Plot: "Jessica (Jennifer Westfeldt) is at the end of her emotional rope. She happens upon an intriguing personal ad, whose only drawback is that it's in the \"women seeking women\" section. On a daring whim, she decides to answer it.", Genre: "Romance"
// })
// var movie19 = new Movie({
//   Title:"Blue is the Warmest Color", Year: "2013", Poster: "./assests/blue-is-the-warmest-colour.jpg", Plot: "Determined to fall in love, 15-year-old Adele is focused on boys. But it's a blue-haired girl she meets on the street who really piques her interest.", Genre: "Romance"
// })
// var movie20 = new Movie({
//   Title:"The Notebook", Year: "2004", Poster: "./assests/notebook.jpg", Plot: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.", Genre: "Romance"
// })

// movie5.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie6.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie7.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie8.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie9.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie10.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie11.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie12.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie13.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie14.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie15.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie16.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie17.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie18.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie19.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie20.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
