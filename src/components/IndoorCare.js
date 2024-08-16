import React from 'react';
import { ArrowUpward } from '@mui/icons-material';
import {  Button  } from '@mui/material';
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
const IndoorCare = () => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '0 auto',
            padding: '20px',
            maxWidth: '800px',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        h1: {
            fontSize: '24px',
            margin: '20px 0',
        },
        h2: {
            fontSize: '20px',
            margin: '15px 0 10px 0',
        },
        p: {
            lineHeight: '1.6',
            margin: '10px 0',
        },
        img: {
            width: '100%',
            height: 'auto',
            margin: '20px 0',
        },
        footer: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '14px',
            color: '#666',
        },
    };

    return (
        <div>
            <header style={{ 
    width: '100%',
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'relative',
    margin: 0
}}>
                <h1>Indoor Plant Care Guide</h1>
            </header>
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>The Ultimate Guide to Indoor Plants</h1>
                <p>Indoor plants should be an essential component of every interior design. Greenery brightens up indoor spaces and is known to have mood-boosting qualities.</p>
            </header>

            {/* <img 
                src="image-banner-stock-a-beautiful-young-asian-woman-taking-care-and-1335350065.webp" 
                alt="Indoor Plant Care"
                style={styles.img}
            /> */}

            <p>Indoor plants are popular because they are relatively easy to take care of, provide health benefits, and can be used in a variety of indoor décor themes. Indoor plants are a great option for those who have little yard space for an outdoor garden or for those who live in climates with severely cold winters.</p>
            <p>So, if you’re caring for indoor plants for the first time, our ultimate guide will provide you with the necessary information to allow your green friends to thrive.</p>

            <h2 style={styles.h2}>What are indoor plants?</h2>
            <p>Indoor plants are plants that grow indoors. There are a variety of tropical plants, like palms, that thrive in indoor environments.</p>

            <h2 style={styles.h2}>How do you plant indoor plants?</h2>
            <p>Most of the time, indoor plants are already in containers, so there is no need to plant them. There are typically only two reasons you need to plant an indoor plant:</p>
            <ul>
                <li>If your plant is getting too big, then you will need to replant it into a larger container.</li>
                <li>If you wanted to grow bulbs indoors, then you will need to plant the bulbs yourself.</li>
            </ul>

            {/* <img 
                src="https://images.unsplash.com/photo-1601758123500-2fd05623c38a" 
                alt="Potted Plant"
                style={styles.img}
            /> */}

            <h2 style={styles.h2}>How much light do indoor plants need?</h2>
            <p>Succulents and cacti need continuous, daily sunlight. Plants with foliage need roughly 8 hours of light per day. The amount of light depends on the plants you are growing, so we suggest doing research on the specific plants you are growing.</p>

            <h2 style={styles.h2}>What qualities make for a good indoor plant?</h2>
            <ul>
                <li><strong>A good root system</strong> – Healthy roots are thick and light in color.</li>
                <li><strong>Foliage</strong> – If you can’t see through it, the foliage is thick enough.</li>
                <li><strong>Check for disease</strong> – Signs include white dots, sticky residue on the leaves, and a bad odor.</li>
            </ul>

            <h2 style={styles.h2}>Which indoor plants require low light?</h2>
            <ul>
                <li><strong>Philodendron</strong> – A very common indoor plant that rarely attracts pests.</li>
                <li><strong>Pothos or Devil’s Ivy</strong> – Thrives in low light or bright, indirect light.</li>
                <li><strong>Dracaena</strong> – Popular with long green leaves, may need pruning.</li>
                <li><strong>Peace Lily</strong> – Best in moist soil and can handle low light.</li>
            </ul>

            <h2 style={styles.h2}>Which indoor plants are the easiest to take care of?</h2>
            <ul>
                <li>Sansevieria</li>
                <li>Philodendron</li>
                <li>Most succulents</li>
                <li>Pothos</li>
                <li>ZZ plant</li>
            </ul>

            <h2 style={styles.h2}>Which plants are considered indoor plants?</h2>
            <ul>
                <li>Dracaena</li>
                <li>Hedera Helix</li>
                <li>Sansevieria Zeylanica Superba</li>
                <li>Scindapsus</li>
            </ul>

            <h2 style={styles.h2}>What are examples of some common indoor plants?</h2>
            <ul>
                <li>Aglaonema</li>
                <li>Dracaena</li>
                <li>Ferns</li>
                <li>Philodendrons</li>
                <li>Palms</li>
                <li>Pothos</li>
                <li>Spathiphyllum</li>
                <li>Succulents</li>
            </ul>

            {/* <img 
                src="image-banner-stock-dracaena-fragrans-plant-with-green-leaves-on-1325418120.webp" 
                alt="Dracaena Plant"
                style={styles.img}
            /> */}

            <h2 style={styles.h2}>What are the best indoor plants?</h2>
            <ul>
                <li>Aglaonema – Attractive and tolerates low light.</li>
                <li>Aspidistra – Handles low light and infrequent watering.</li>
                <li>Succulents – Require bright light.</li>
                <li>Dracaenas</li>
                <li>Philodendrons</li>
            </ul>

            <h2 style={styles.h2}>How do you re-pot indoor plants?</h2>
            <p>Unless your indoor plant has become too large for the pot it is in, you typically don’t need to re-pot indoor plants. For steps and tips on how to properly re-pot plants, check out our blog on re-potting plants.</p>

            <h2 style={styles.h2}>How do you care for indoor plants?</h2>
            <ul>
                <li>Keep the potting soil moist – Not too wet nor too dry.</li>
                <li>Ensure the pot has drainage holes.</li>
                <li>Place the plant near a light source.</li>
                <li>Determine the plant species for accurate care.</li>
            </ul>

            <h2 style={styles.h2}>How do you prune indoor plants?</h2>
            <p>If your plant is getting tall and spindly, pruning may help. Otherwise, it's generally best to leave the plant as is.</p>

            <h2 style={styles.h2}>What are some of the common reasons indoor plants die?</h2>
            <ul>
                <li>Overwatering or underwatering</li>
                <li>Incorrect light levels</li>
                <li>Neglect</li>
            </ul>

            {/* <img 
                src="image-banner-stock-spring-houseplant-care-1300822810.webp" 
                alt="Spring Plant Care"
                style={styles.img}
            /> */}

            <h2 style={styles.h2}>How long do indoor plants typically live?</h2>
            <p>On average, indoor house plants last 2-5 years. After that, plants stop thriving, and it’s best to invest in a new one.</p>

            <h2 style={styles.h2}>Which interior plants improve air quality the most?</h2>
            <ul>
                <li>Red-Edged Dracaena</li>
                <li>Weeping Fig</li>
                <li>Bamboo Palm</li>
            </ul>

            <h2 style={styles.h2}>How do indoor plants affect people’s moods?</h2>
            <p>Indoor plants clean the air, reduce noise levels, and stress in the workplace.</p>

            <h2 style={styles.h2}>Are indoor plants expensive?</h2>
            <p>Indoor plants are generally affordable, especially smaller ones. Research is recommended before buying, as large retailers might not offer the best deals.</p>

            {/* <img 
                src="image-banner-stock-epipremnum-aureum-is-a-plant-found-in-tropical-1406924656.webp" 
                alt="Epipremnum Aureum"
                style={styles.img}
            /> */}

            <h2 style={styles.h2}>Which indoor plants work well for small living spaces?</h2>
            <ul>
                <li>Philodendrons</li>
                <li>Succulents (with good light source)</li>
                <li>Hedera Helix</li>
                <li>Devil’s Ivy</li>
            </ul>

            <h2 style={styles.h2}>What is the best kind of indoor plant fertilizer to use?</h2>
            <p>Look for fertilizers labeled for indoor plants at a garden center. Use the rate specified for indoor plants, and if uncertain, a general houseplant fertilizer will work.</p>

            <h2 style={styles.h2}>How do I get rid of bugs on indoor plants?</h2>
            <p>Purchase insecticidal soap and spray the entire plant, including the undersides of leaves. Repeat the process every two weeks. For severe infestations, consider discarding the plant.</p>

            <h2 style={styles.h2}>How do I know when to water my indoor plant?</h2>
            <ul>
                <li>Soil probe</li>
                <li>Moisture meter</li>
                <li>Lifting the plant</li>
                <li>Wilting</li>
                <li>Tipping</li>
                <li>Yellow leaves</li>
            </ul>

            <h2 style={styles.h2}>How do I care for peace lily plants indoors?</h2>
            <p>Peace lily plants need moderate watering. If the plant wilts, it needs water. Peace lilies handle low light well and do not necessarily need to be in a window.</p>

            <footer style={styles.footer}>
                <p>&copy; 2024 Green Paradise</p>
            </footer>
        </div>
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

export default IndoorCare;
