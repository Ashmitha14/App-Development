import React from 'react';
import { Grid, Card, CardContent, Typography, Divider, CardMedia, AppBar, Toolbar, IconButton, Badge , Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ArrowUpward } from '@mui/icons-material';
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
const articles = [
  {
    title: 'Ensuring You Have The Perfect Irrigation System For Your Yard',
    content: `Irrigation systems, or reticulation, are a significant consideration for sustainable landscaping. When done right by a landscaper, a well-made irrigation system will help you look after your gardens for years to come, reducing the time you spend watering by hours per week.

    On the other hand, a poorly installed system can cause problems, including regular leaks and dead areas where the water doesn’t get to. Because of this, it’s extremely important to make sure you plan your irrigation system properly before you install it, otherwise you might end up digging it up and starting again.
    Why Should I Install an Irrigation System?

Have you ever tried to look after a large garden for an entire summer using just the hose? If you have, then you probably already know the answer to this. Manual watering is difficult, time-consuming and downright frustrating. Installing an irrigation system will:

Ensure your plants are regularly watered at the correct time of day.
Give you more time to spend doing the things you love.
Help you become more water-efficient.
Keep your entire outdoor space healthy and in good condition.
And much, much more.
If you weren’t convinced before, you should be by now! Top-quality irrigation systems are a must if you’re serious about keeping your gardens in good condition, and the best time to install them is during the landscaping process.

What Sort of Irrigation Systems Are Available?

Numerous different types of irrigation systems are available, and each is generally suited to a specific situation. These include:

Pop-up sprinklers are great for lawns and other large, relatively flat areas.
Drip irrigation systems are usually used to release water exactly where your plants are.
Micro-spray sprinklers work when you have small garden areas that need a good soaking.
Soaker hoses are basically porous pipes that release water along their entire length. These are great for veggie gardens.
These are a few of the more popular systems out there, but it certainly isn’t an exhaustive list. Ask your landscaper what your options are.`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2020/04/Perfect-Irrigation-System-700x545.jpg'
  },
  {
    title: '5 Ways To Make Your Landscaping Wildlife Friendly',
    content: `Many landscape designers love the animal kingdom every bit as much as they love the plant kingdom. For this reason, instead of simply creating their landscape designs and implementing it with no thought for any wildlife, they take care to ensure that their garden becomes a wildlife-friendly environment.

    If you are also someone who wants to ensure that any landscaping you carry out makes your garden a welcome haven for all sorts of species, then read on and we will explain to you 5 ways in which you can make this become a reality.

    Limit The Use Of Pesticides And Other Chemicals
    Whilst we would give this advice to any landscaper in any circumstances, it is even more applicable when you want your garden to become somewhere where wildlife can visit and do so safely. The last thing that will encourage them to do so is harmful and even poisonous chemicals. There are plenty of non-chemical alternative pesticides that you can purchase or make at home yourself, that will do the job just as well.
    Build A Pond Or Water Feature

In the hot, dry sunny days of summer, many animals suffer from heat and dehydration as much as humans, so what better way to help them than to provide them with your own little oasis? This could be a pond or simply a small water feature within your landscaping design. The birds especially will love a spot where they can flap their wings in the water and give themselves a nice cool bath.

Provide Some Shelter

If you do not have any means to provide a water feature for wildlife to cool off in, then an alternative is to provide them with some shelter. Here they can sit or lie in the shade and out of the sun’s hot rays. Lizards and small rodents will love these if they are at ground level, and for the birds, you could build them a birdhouse. Bees too, an essential part of our ecosystem, may not need shelter from the sun but can be accommodated by hanging a ‘bee hotel‘ on a wall or fence.

Feed Them

So far, you have made your landscaping safe, provided water and some shelter, so the next step is to feed some of the creatures that come into your garden. However, you must first establish what specific wildlife is likely to enter your garden and what the most appropriate foods to provide them are. Birds are likely to be the most common ‘diners’ in your garden, followed by lizards and small mammals, depending on where you live.
`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2021/11/5-Ways-To-Make-Your-Landscaping-Wildlife-Friendly-700x545.jpg'
  },
  {
    title: 'What Is Safety Glass And Is It Essential For Glass Fences?',
    content: `With the rise in popularity of things like glass pool fencing and glass barriers, it’s becoming increasingly important to think carefully about the types of glass we’re using to build things. Safety standards surround the use of glass as a building material in Australia, but these aren’t always followed.

    However, in the interest of safety, you should always do your best to ensure you’re following the relevant rules regarding pool fencing, especially when dealing with glass pool fencing.

    One of the essential Australian standard rules states that only safety glass can be used for building purposes – including for a glass pool fence and balustrade. With this in mind, let’s have a quick look at what safety glass is and why it’s so important to use it:

    What is safety glass?
    Safety glass is any form made more robust to endure tougher environmental conditions. The laws about what sort of safety glass you can use to build a pool fence vary between states, so it’s essential to read the relevant laws and regulations.
    What are the benefits of using safety glasses?

As noted above, you are required by law to use safety glass when you’re building a new pool fence. However, if you need more convincing, here are a few reasons why you should always use it:

Safety glass is solid and durable, which won’t break under normal environmental and residential conditions.
Safety glass is resistant to changes in temperature, making it perfect for use in outdoor areas.
Safety glass is easy to fix into position, which makes it the perfect material for pool fences and railings.
As you can see, plenty of benefits are associated with using safety glass, which is why you have to use it under Australian law.

Why should I always make sure I’m using safety glass for my pool fence?

If, for some reason, you’re still not convinced that you need to use safety glass to build your pool fence, then consider the following:

Safety glass is firm, which means that your children and pets won’t be able to break through it. If they could, they would risk injury to themselves and others around them.
Again, if your pets or children could break through your glass pool fence, they would be at risk of drowning. Safety glass prevents this.
Safety glass is smooth and slippery, so it can’t be easily climbed – further securing your pool area.`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2019/02/Glass-Fences-700x545.jpg'
  },
  {
    title: 'Choosing The Right Sized Limestone Blocks For Your Needs',
    content: `Limestone is fast becoming one of the most popular building materials in Australia, especially in places where limestone is abundant. It is strong, versatile and can be used for a wide range of different things. Limestone blocks are one of the more popular variations of limestone, and they come in various different sizes.

    According to Limestone Blocks Perth choosing the right sized limestone blocks for your next project can be hard. Smaller blocks are usually easier to manipulate and install, but they aren’t as strong and they usually cost more. Larger blocks may need machinery to move around and build things with, but once they’re in place they result in extremely strong walls and retainers.

    There are a few different things that you should think about when you’re choosing limestone blocks for your next project to make sure that you get the right size. These include:

    What Their Purpose Is
    If you’re limestone blocks are going to be used to build something like a retaining wall, larger sizes will probably be better. Retaining walls are designed to hold back large amounts of sand or dirt, allowing you to create flat areas for gardens or construction. They need to be strong.

    Larger limestone blocks will let you build thicker retaining walls, which will naturally be stronger. They will also have less joins, which are usually the weak points in limestone walls and fences. Note that very large blocks can’t be installed by hand, which means that you may need to consider either hiring a machine or employing a contractor to complete your project for you.

    Similarly, you will probably want smaller, thinner blocks for things like fences and paths. If you’re not sure about the best size for your project, simply speak to your local limestone block supplier.`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2018/11/Limestone-Blocks-700x545.jpg'
  },
  {
    title: 'Top Tips For Choosing Sustainable Materials For Your New Garden',
    content: `Professional landscape design services as offered by companies such as Landscaping Sydney, is becoming more and more popular than ever in the modern world. People everywhere are employing the services of experienced landscape designers to make their yards and gardens look neat and tidy.

    With this rise in professional landscaping comes a rise in concerns about the environment. It is therefore very important to consider environmental sustainability when planning your new yard or garden. One of the best ways to make sure that you have a sustainable garden and yard is to choose sustainable materials. Some landscaping materials are environmentally friendly, but a lot are not. Our top tips for choosing the best sustainable materials for your new garden include:

    Avoid plastics:
    One of the major environmental problems of the modern world is plastic pollution. Unfortunately, people and countries throughout the world are suffering from the effects of plastic pollution, and the problem is made worse by the ease of use and affordability of plastics.

    A lot of landscaping and gardening materials are made from synthetic or plastic materials. If possible, you should avoid these and go for something more environmentally friendly. Plastic can leach chemicals into the environment, and, if you are growing fruit and vegetables, they can eventually make their way into your body. Instead of plastic, try and use things like wood or metal.`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2015/09/Sustainable-Materials-700x545.jpg'
  },
  {
    title: 'How to Create a Private Outdoor Sanctuary',
    content: `Living in a densely-populated state can have its benefits, but when it comes to landscaping, you can come up against a few barriers. There is no denying that being in the heart of the city means you’re within proximity to all life’s necessities, but being able to see your neighbours and have them see you can be draining. You’re surrounded by people all day at work, so the last thing you want is to see more of them when you get home!

    Creating a private outdoor sanctuary can seem like an impossibility, but with expert help from the likes of Landscaping Sydney, or a bit of research, it’s entirely achievable. Here is how to create a private outdoor sanctuary to block out the rest of the world.

    Tall Plants:
    Adding plants to your backyard can have all manner of benefits, but the primary one of tall plants is that they are a natural privacy screen. If you enjoy entertaining in your yard, then position tall potted plants strategically around that area. They can provide shelter, shade, and protection from the prying eyes of neighbours. What’s more, when done right, they can look stunning!

    Privacy Panels:
    Privacy panels can take on many forms. You can invest in frosted plexiglass to block off parts of your entertainment area, construct wood lattice to offer at least a bit of protection from your neighbours, or set up a One Shade custom shade sail to protect yourself from the sun while you enjoy your new sanctuary. The sky’s the limit for where you can put them too. Some people prefer to section off a small portion of their yard, while others attach it to low fencing to offer height. There are plenty of options at your disposal so consult the experts to find out which one will work best for you.`,
    image: 'https://www.greenhousegardeningtips.com/wp-content/uploads/2018/07/Private-Outdoor-Sanctuary-700x545.jpg'
  },
];

const ArticlesPage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Garden Layout
          </Typography>
        </Toolbar>
      </AppBar>
    <Grid container spacing={4} style={{ padding: 24 }}>
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={article.image}
              alt={article.title}
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {article.title}
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary" paragraph>
                {article.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Button
    onClick={scrollToTop}
    style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    }}
>
    <ArrowUpward />
</Button>
    </div>
  );
};

export default ArticlesPage;
