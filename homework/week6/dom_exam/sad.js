class Article {
    constructor(title, author, text) {
        this.title = title;
        this.author = author;
        this.text = text;
    }
    matches(query) {
        let expression = new RegExp(query);
        return expression.test(this.text) || expression.test(this.author)|| expression.test(this.title);
    }
}
class ArticleList {
    constructor(container) {
        this.container = container;
        this.arrList = [];
    }

    addArticle(article) {
        this.arrList.push(article);
    }

    removeArticle(article) {
        this.arrList.pop(article);
    }
    render() {
    }
}
/*
let art1 = new Article('art1', 'auth1', "this is art1");
let art2 = new Article('art2', 'auth2', "this is art2");
let art3 = new Article('art3', 'auth3', "this is art3");
let art4 = new Article('art4', 'auth4', "this is art4");*/
const list = new ArticleList();
/*list.addArticle(art1);
// list.addArticle(art2);
// list.addArticle(art3);*/
// list.removeArticle(art2);
const temp = [
    {
        "title": "On Walt Whitman, Unsung Newspaperman",
        "author": "Philip Eil",
        "text": "<p>There are many professions that can rightly claim Walt Whitman as their own. He was, at different times in his life, a carpenter, a schoolteacher, a government clerk, a volunteer nurse, a printer, a typesetter, and the operator of a stationary store.</p><p>He was also, you might have heard, a poet.</p>"
    },
    {
        "title": "What Gets Lost (and Found) in Translating Prose to Comics",
        "author": "Tobias Carroll",
        "text": "<p>As goes language, so too goes form. Comics creators have long drawn on literary sources for inspiration or outright adaptation. We’ve moved far beyond the days of <em>Classics Illustrated</em>, wherein a condensed version of a novel was translated in a straightforward manner to words and pictures on a page. David Mazzucchelli’s adaptation of Paul Auster’s <em>City of Glass</em> is a notable work in its own right, and one that neatly blends the aesthetics of two distinctive artists.</p>"
    },
    {
        "title": "On Frank Lloyd Wright and the Architectural War For New York’s Skyline",
        "author": "Anthony Alofsin",
        "text": "<p>The New York City to which Frank Lloyd Wright returned in late 1926 was dramatically different from the metropolis he had encountered in 1909, but its evolution was not a mystery. The dramatic skyscrapers, the stock market, airplanes, jazz, the Harlem Renaissance, radio, and even organized crime, which gave the 1920s their fame, did not appear from nowhere. All had developed from the preceding decades. The risk was large, but for greater New York, still barely 20 years old, “the ties that bound—subways, bridges, schools, amusement parks, police, theaters, jobs, water, public health, Tammany, the excitement and pride of living in a great city—overmatched the innumerable antagonisms and kept them with bounds.” Squinting at risk, its citizens might assume “so far so good.”</p>"
    },
    {
        "title": "My Decade-Long Fascination with the Tale of Monica Lewinsky",
        "author": "Gabrielle Bellot",
        "text": "<p>For over a decade now, I’ve maintained a fascination with Monica Lewinsky so ardent that it borders on obsession. It began during my senior year of college, when I took a literature seminar that focused on early sentimental novels about scorned women. The course culminated in a research paper on a woman from history whose sexual decisions led to her to be scandalized by her society.</p>"
    },
    {
        "title": "On “Good Men” and the Vague, Low Standards Required to Be One",
        "author": "Abi Maxwell",
        "text": "<p>The first time I fell in love, I was 14 years old, working nights and weekends as a ski instructor at the local mountain that had one chairlift and one rope tow. He also worked there, and he didn’t love me back—or at least I hope he didn’t; he was 25. Saying it now, as an adult, feels horrifying, though for years I stood firm that he was a good man and there was nothing particularly sinister about the relationship. He picked me up on the way to the mountain, and drove me home at night. We never actually had lessons to teach, so we spent our time riding the chairlift and skiing together. Sometimes, we would talk on the phone. He even made me a mix tape.</p>"
    },
    {
        "title": "Why We’ll Never Get Tired of Literary Retellings",
        "author": "Meg Donohue",
        "text": "<p>I make an effort to read a wide variety of books, but the genre that I find myself drawn to time and again is retellings of classic novels. I’ve yet to hear about a new twist on a timeless tale that doesn’t sound compelling to me. In fact, it’s a niche of storytelling that I enjoy so much that I’ve written my own entry into the genre, a novel entitled <em>You, Me, and the Sea</em> that is inspired by Emily Bronte’s <em>Wuthering Heights</em>. As I worked on my novel, I spent a lot of time thinking about my favorite retellings, and what it is, exactly, that makes these stories so endearing to readers—and writers. What I’ve come to believe is that reimaginings present a unique delight to readers because they manage to combine the pleasure of surprising twists with the comfort of a familiar story.</p>"
    },
    {
        "title": "The Uncertain Future of Sweden’s Floating Libraries",
        "author": "Anjie Zheng",
        "text": "<p>On a cold morning in a port a few miles outside Stockholm, a group of boys who don’t usually read are huddled around a table of books.</p><p>“Is there any more coffee?” one of them shouts.</p><p>The boys live on the Swedish island of Möja, a quiet, green island dotted with villages that house around 200 full-time residents and one library. The library they’re currently in, however, has hundreds more books than they normally see in one place, and it comes to them on the water.</p>"
    },
    {
        "title": "On Cora Crane and the Literary Women Who Prop Up Literary Men",
        "author": "Jaime Fuller",
        "text": "<p>By September 1900, Cora Crane was desperate for money. This wasn’t a new state of affairs; there was never enough money, even when her common-law husband Stephen Crane had been alive. But the author of <em>The Red Badge of Courage</em> had been dead for more than three months. There were still some short stories of his left to sell, perhaps a biography of him left to write, but what to do after that?</p>"
    },
    {
        "title": "Scent and Sensibility: 5 Olfactory Novels",
        "author": "Erica Bauermeister",
        "text": "<p>Scents are the stealth weapons in the arsenal of the senses. They head directly to the emotional parts of the brain, bypassing rationality. The memories they evoke are rich, immersive things, three-dimensional and intimate. Novels about scents tend to affect us in a similar way. We read their sentences and dive into a sense we rarely pay attention to in our normal lives.</p><p>For years, I wanted to write a character who was able to “see” the scents of emotions, weather, and even time. I wondered how she would perceive our world and the people around her. What I didn’t anticipate was how deeply the book would affect me. Even after finishing my daily writing, my imagination stayed with Emmeline on that remote and forested island, in her father’s cabin, its walls lined with drawers, each one containing a mysterious scent. When I went back to real life, it was alive with smells.</p>"
    },
    {
        "title": "Struggling to Mine Family History for My Novel",
        "author": "Roxana Robinson",
        "text": "<p>The story was a good one: Francis Warrington Dawson came from England to fight for the Confederacy. After the war, he stayed on; later, he became editor of the Charleston News and Courier.</p><p>Dawson loved the South, but didn’t always agree with it. He had strong opinions. For a time he throve and prospered, and then he did not. The story was about the South, and race, slavery, and violence. I knew about it because Dawson was my great-grandfather.</p>"
    },
    {
        "title": "How Imagining Other Worlds Can Help You Imagine Other Selves",
        "author": "Veronica Scott Esposito",
        "text": "<p>Of all the pleasures of speculative fiction, I may have missed world-building the most.</p><p>Any compelling speculative world resembles ours enough to fascinate, but is also different enough to be visionary. Masters of the genre—like Margaret Atwood or Ursula K. Le Guin—situate their most enduring works in singular places. In <em>The Handmaid’s Tale</em>, the unforgettable suffering, compassion, and strength of Offred can only come across in the uniquely brutal Republic of Gilead. In Le Guin’s <em>Earthsea</em> books—where words are so important that knowing the true name of things can reshape reality—this bold view of language governs her modern mythology and makes it original.</p>"
    },
    {
        "title": "Six of the Best Bad Women in Fiction",
        "author": "Sara Collins",
        "text": "<p>I’ve always felt it was the job of a good novel to dig in the dirt, which may be why the best ones always seemed to me to be the ones about women who were angry, sad, or just plain bad: women made reckless by <em>ennui</em>, women who resisted all the way, who failed to fit themselves to the shape of a husband’s thumb. I can’t understand picking up a book in search of someone unobjectionable. There’s nothing enthralling in good behavior; it’s wickedness that keeps us rapt. Besides, the pretense of virtue always rings false; hence no one ever came away from reading <em>Little Women</em> dreaming of being Beth March. As Margaret Atwood says, “Create a flawless character and you create an insufferable one.”</p>"
    }
];
/*const XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
const inputArticles = "http://my-json-server.typicode.com/mate-academy/literary-blog/articles";
const requestMethod = 'GET';
const articleLists = new XMLHttpRequest();


articleLists.open(requestMethod, inputArticles, false);
articleLists.responseType = 'json';
articleLists.send();
let resultList = JSON.parse(articleLists.responseText);*/
temp.forEach(elem => {
    elem['title'] = new Article(elem['title'],elem['author'],elem['text']);
    list.addArticle(elem['title']);
});

console.log(list.arrList[0].title)
const as = document.querySelector('#article-list');
as.innerHTML=list.arrList[0].title;

list.arrList.forEach(article => {
    let section = document.querySelector('.test')
    let articleContainer = document.createElement("div");
    articleContainer.className = "container";

    section.appendChild(articleContainer);
    let titleContainer = document.createElement('span');

    let authorContainer = document.createElement('span');

    let textContainer = document.createElement('p');
    textContainer.className = "title";

    articleContainer.appendChild(titleContainer);
    articleContainer.appendChild(authorContainer);
    articleContainer.appendChild(textContainer);
    titleContainer.innerHTML = article.title;
    titleContainer.className = "title";

    authorContainer.innerText = article.author;
    authorContainer.className = "author";

    textContainer.innerHTML = article.text;
    textContainer.className = "text";



    /*    as.innerHTML = article.title;
        as.innerHTML = article.author;*/

})

