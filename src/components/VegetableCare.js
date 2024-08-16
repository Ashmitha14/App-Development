import React from 'react';
import { Button,IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
const VegetableCare = () => {
  const sectionStyle = {
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px',
  };
  const header= {
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
};
  const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '700px',  // Set the desired width
    height: '500px', // Set the desired height
    objectFit: 'cover', // Ensures the image covers the given width and height
    borderRadius: '8px',
    marginBottom: '10px',
  };
  
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  return (
    <div>
        <header style={header}>
                <h1>Vegetable Care Guide</h1>
            </header>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>6 Secrets to Starting Your First Vegetable Garden Off Right</h2>
        <p style={paragraphStyle}>
          Planting tomatoes, carrots, or cukes for the first time? Use this guide to help you plan, prepare, and plant a successful plot.
        </p>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>1. Start with a Small Space</h3>
          <p style={paragraphStyle}>
            If you're a beginner gardener, start small. It's better to be thrilled by what you produce in a small garden than be frustrated by the time commitment a big one requires. It's also best to learn a few gardening basics before investing tons of time and money in this new hobby. You'll get a feeling for how much time gardening takes. You'll find out if you like spending time outside planting, watering, and weeding. You'll also learn how much produce you and your family can eat over the course of a summer.
          </p>
          <img
            src="https://www.bhg.com/thmb/tbaTjOSP4IxJK8XZh8h9Hu1trL8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woman-haarvesting-vegetables-in-garden-ad4e9942-6c2139192aec49aeb46256594d1fc8bb.jpg"
            alt="Start with a Small Space"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            A good size for a beginner's vegetable garden is 6x6 feet. Select up to five types of vegetables to grow, and plant a few of each type. You'll get plenty of fresh produce for your summer meals, and it will be easy to keep up with the chores. Growing vegetables in containers is also a good way to start out. With them, you don't even need a yard; a sunny deck or balcony work fine.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>2. Grow What You Love to Eat</h3>
        
          <img
            src="https://www.bhg.com/thmb/g0OU7coAzD6iWli26DSjt6l-IZE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/drip-irrigation-system-lettuce-bf7a920c-906d5a06522742b2af962d2565b190d7.jpg"
            alt="Grow What You Love to Eat"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            <strong>Be Picky About Varieties</strong>
            <br />
            Pay close attention to the description on the seed packet, tag, or label. Each variety of vegetable comes with certain characteristics. Some produce smaller plants ideal for containers or small gardens. Other varieties offer better disease resistance, improved yields, or better heat- or cold-tolerance. Start by choosing veggies you like to eat, then look into their sizes and care needs.
          </p>
          <p style={paragraphStyle}>
            <strong>Productivity</strong>
            <br />
            Think about how much you and your family will eat and how likely you are to freeze, can, or give away excess produce. Then be realistic about how many seeds or plants you need to put into the ground. Many beginners make the mistake of planting too much. Vegetables like tomatoes, peppers, and squash keep providing throughout the season, so you may not need many plants to serve your needs. Other vegetables, such as carrots, radishes, and corn, can be harvested only once and then would need to be replanted.
          </p>
          <p style={paragraphStyle}>
            <strong>Successive Crops</strong>
            <br />
            Planting both cool- and warm-weather vegetables will give you a harvest of vegetables and herbs continuously through the spring, summer, and fall. In early spring, grow lettuce, greens (such as arugula), peas, radishes, carrots, and broccoli. After you've harvested your cool-weather crops, plant hot-weather favorites, such as tomatoes, peppers, eggplant, and herbs. In fall, you can harvest potatoes, cabbage, and kale.
          </p>
          <p style={paragraphStyle}>
            <strong>Test Garden Tip:</strong> By planting vining crops like green beans and peas, you make use of vertical space in the garden and boost yield per square foot.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>3. Choose the Spot for Your Garden</h3>
          <p style={paragraphStyle}>
            No matter where you put your garden or what you decide to plant, there are two basic requirements that your location needs to meet for the best success: water and light.
          </p>
          <img
            src="https://www.bhg.com/thmb/OLDhSzwy9XLBhYr813GmGBaFrz8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-wood-trellis-garden-e0a68676-2d268b0ca5e84f31b264f6b43daa3867.jpg"
            alt="Choose the Spot for Your Garden"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            <strong>Lots of Sunlight Is a Must</strong>
            <br />
            Like all plants, vegetables need the sun to kick-start photosynthesis. The fastest-growing vegetables need full sun—at least 6 to 8 hours of direct sunlight a day—without blockage from trees, shrubs, or fences. That's why you won't have much success if you plant sun-loving vegetables in shady spaces.
          </p>
          <p style={paragraphStyle}>
            If your yard provides partial shade, plant vegetables and herbs that tolerate those conditions, such as lettuce, kale, chard, spinach, chives, cilantro, parsley, and thyme. Root vegetables like carrots, radishes, and beets might also work if your site gets at least 4 hours of direct sunlight a day. Or if you have a sunny patio, switch to container gardening. That way you can place sun-loving vegetables and herbs such as tomatoes, cucumbers, beans, basil, dill, and rosemary, where they'll do well.
          </p>
          <p style={paragraphStyle}>
            <strong>Think About Convenient Water Access</strong>
            <br />
            The closer you can site your plot to a water source, the better. You'll need to be able to water frequently during the first few weeks after seeds germinate or seedlings are transplanted to help these fragile plants produce strong roots and stems. Once your plants are established, it's better to give your garden a long drink every few days rather than a little sprinkle every day. Then the water will move deeper into the soil, which encourages roots to grow deeper, where they're better able to access nutrients they need to stay healthy. Consider installing soaker houses or drip irrigation on a timer to help minimize water waste and the time you need to spend watering.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>4. Plan Your Vegetable Garden Layout</h3>
          <p style={paragraphStyle}>
            Choose either row cropping or intensive cropping—there are benefits to each!—when you plan your vegetable garden's layout.
          </p>
          <img
            src="https://www.bhg.com/thmb/wEK3CdJprL8OeEANLJ1f4DXTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/row-cropping-vegetables-73c0621c-5051b83cb67e4539aeab33c271a59964.jpg"
            alt="Row cropping vegetables"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            <strong>Row Cropping</strong>
            <br />
            Place plants single file in rows at least 18 inches apart so you can walk easily between them. This approach makes the most sense for large vegetable gardens because rows make it easier to use mechanical equipment, such as tillers, to battle weeds. The downside is that space set aside for footpaths cuts down on the number of vegetables you can plant.
          </p>
          <p style={paragraphStyle}>
            <strong>Test Garden Tip:</strong> Tall plants generally do well on the north side of the garden. This includes naturally tall plants that can be grown on vertical supports, including peas, cucumbers, and beans. Save money by making your own A-frame trellis for growing vegetables.
          </p>
          <p style={paragraphStyle}>
            <strong>Intensive Cropping</strong>
            <br />
            Boost your garden's productivity with intensive cropping, which means that you space two or three plants close together in a bed about 4 feet wide (aka a wide row). Seeds are sown or transplants are placed so that their leaves will barely touch at maturity. This approach, which uses almost every square inch of the prepared soil, works well for most types of vegetables, excluding the ones that vine such as cucumbers. The downside of this method is that you have to weed by hand because the plants grow so close together.
          </p>
          <p style={paragraphStyle}>
            The square-foot method, in which you subdivide a raised 4x4-foot garden bed into 1-foot squares using a physical grid—such as lattice strips—is a specialized version of intensive cropping. You'll need 8 cubic feet of top-quality garden soil to fill such a bed with 6-inch-high sides. The planting formula is simple: 1 extra-large plant per 1x1-foot square; 4 large plants per square; 9 medium plants per square; and 16 small plants per square. Mix and match at will.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>5. Start Plants in Rich Soil</h3>
          <p style={paragraphStyle}>
            For the best harvest, your vegetable garden needs the best soil you can give it. Rich, healthy soil is something you know when you feel it: It's easy to dig and drains well. Pick up a trowel's worth and put it in your hands. Does it feel gritty? Too much sand. Is it powdery? Too much silt. Is it sticky when wet? Too much clay. The combination of these three types, and in which specific proportions, determines the texture of your garden soil. That texture affects drainage and the availability of nutrients.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH3nrUd8567jr0_bxpgLreidTpujNYhU6iQ&s"
            alt="Start Plants in Rich Soil"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            You want soil that is dark, crumbly, and literally full of life. Fortunately, no matter what the texture may be, all soil can be improved over time by incorporating organic matter into it. Take sandy soils, for instance. They're made up of large soil particles, so water and nutrients run through gaps relatively quickly. Adding organic matter—typically compost—to sandy soil helps fill in the spaces between sand particles, which helps retain both moisture and nutrients for plants to use.
          </p>
          <p style={paragraphStyle}>
            Clay soils are just the opposite. They contain very small, densely packed particles that hold moisture but don't allow much air space for plant roots. Compost helps separate those tiny clay particles so water can drain more freely and plant roots can get needed oxygen. If it's not clear which type of soil you have, send a sample to a state-certified soil-testing lab for analysis.
          </p>
          <p style={paragraphStyle}>
            Additionally, testing the soil where you want to grow food will reveal important details such as pH and nutrient levels. Knowing what you're starting with is essential for figuring out what types of soil amendments you may need to add and how much so you avoid waste or not adding enough.
          </p>
          <p style={paragraphStyle}>
            To prepare your soil for planting, spread any needed amendments like compost and work them into the soil with a tiller or spade. Avoid stepping on freshly tilled soil or you'll compact it and undo all your hard work. Then rake the surface smooth and water thoroughly. Allow the bed to rest several days before you plant so the soil amendments can do their work.
          </p>
          <p style={paragraphStyle}>
            <strong>Test Garden Tip:</strong> Raised garden beds are an easy option if you have poor soil. Build the raised beds on the existing lawn by lining the bottom of frames with several layers of newspaper, then filling with soil. That way, you don't have to do as much digging.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={headerStyle}>6. Be Ready for Pests and Diseases</h3>
          <p style={paragraphStyle}>
            Some problems require special solutions, but in general, follow these guidelines for keeping pests away from your veggies.
          </p>
          <p style={paragraphStyle}>
            <strong>Stop Weeds in Their Tracks</strong>
            <br />
            Weeds compete with your vegetables for light, water, and nutrients, so it's important to keep them to a minimum. A mulch of clean straw or compost can keep weeds at bay around larger plants like tomatoes. Use a hoe to discourage any weed seedlings that do pop up.
          </p>
          <p style={paragraphStyle}>
            <strong>Keep Animals Out</strong>
            <br />
            Big pests, such as deer and rabbits, can wreak havoc in an edible garden. It takes an 8-foot-tall fence to keep deer from jumping into the garden. A fence needs to extend 6 inches beneath the soil to stop rabbits and other burrowing critters from digging their way in.
          </p>
          <p style={paragraphStyle}>
            <strong>Deter Destructive Insects</strong>
            <br />
            Picking off large insects and caterpillars by hand and dropping them into a bucket of soapy water is a safe, effective way to deal with limited infestations. For bigger quantities of insects, try insecticidal soap sprays that you can find at most garden centers. Whichever pest-control chemicals you use, carefully follow the manufacturers' directions.
          </p>
          <p style={paragraphStyle}>
            <strong>Fight Fungal Diseases</strong>
            <br />
            Reduce the likelihood of fungal diseases by watering the soil, not the leaves of the plants. If you use a sprinkler, do it early in the day so the leaves will dry by nightfall. If a plant falls prey to a disease, promptly remove it and throw it in the trash; don't add sick plants to your compost pile. Additional disease preventatives include growing vegetable varieties listed as disease-resistant and changing the location of your plants each year (crop rotation) to reduce disease-causing microbes from building up their populations.
          </p>
        </div>
      </section>
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

export default VegetableCare;
