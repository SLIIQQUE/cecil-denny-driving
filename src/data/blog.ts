export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-pass-your-driving-test-first-time",
    title: "How to Pass Your Driving Test First Time",
    excerpt: "Expert tips from 20+ years of teaching experience on how to maximise your chances of passing your driving test first time.",
    content: `
Passing your driving test first time is the goal of every learner driver. With the right preparation and mindset, you can join the thousands of confident drivers who've passed with flying colours.

## Know Your Test Route

While the DVSA doesn't use fixed test routes, examiners follow similar patterns. Your instructor will take you through common areas where you'll be asked to perform maneuvers, change lanes, and demonstrate your awareness of other road users.

## Master the Basics

Before your test, ensure you can confidently:
- Perform all maneuvers smoothly (parallel parking, bay parking, reversing around a corner)
- Use mirrors appropriately and signal in good time
- Show hazard awareness and anticipation
- Maintain proper road positioning

## Don't Let Nerves Take Over

Feeling nervous is completely normal. The key is to channel that energy positively. Remember, you've prepared for this moment. Your instructor wouldn't have recommended the test if they didn't believe you were ready.

## Common Mistakes to Avoid

The most frequent reasons for failing include:
1. Not checking mirrors properly before changing direction
2. Poor observation at junctions
3. Incorrect use of signals
4. Moving off without proper observation
5. Speed issues - going too slow or too fast

## On Test Day

Get a good night's sleep, eat breakfast, and arrive early. Take a few deep breaths before you start. Remember, the examiner is not trying to catch you out - they want to see you demonstrate safe driving.

## After Passing

Congratulations! Once you pass, you'll be issued a pass certificate. Keep this safe as you'll need it to obtain your full licence from the DVLA.

Good luck with your test!
    `,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    author: "Cecil Denny",
    date: "March 2026",
    readTime: "5 min read",
    category: "Test Tips",
  },
  {
    slug: "choosing-the-right-driving-instructor",
    title: "Choosing the Right Driving Instructor",
    excerpt: "What to look for when selecting a driving instructor and why the right match can make all the difference to your learning experience.",
    content: `
Finding the right driving instructor can make all the difference to your learning experience. A good instructor will not only teach you to pass your test but will give you the skills and confidence to drive safely for life.

## What to Look For

### Patience and Communication
Learning to drive can be stressful. A good instructor should be patient, encouraging, and able to explain things in a way that makes sense to you. Everyone learns differently, and your instructor should adapt their teaching style to match.

### Experience and Qualifications
All driving instructors must be registered with the DVSA and display their ADI licence. Check that your instructor's licence is current and valid. Additionally, consider how long they've been teaching - experience counts.

### Reputation
Ask friends and family for recommendations. Check online reviews. A instructor with consistently positive reviews is likely to be reliable and effective.

### Pass Rates
While pass rates aren't everything (some instructors may take on more difficult learners), it can be a useful indicator of teaching quality.

## Questions to Ask

Before booking, consider asking:
- How long have you been teaching?
- What is your pass rate?
- Do you use a dual-controlled car?
- What learning materials do you provide?
- Can I have a trial lesson first?

## Trust Your Instincts

After your first lesson, assess how you felt. Did you feel comfortable? Did you learn something? Was the instructor encouraging? If something doesn't feel right, it's okay to try someone else.

## The Right Match

Remember, this is about finding the right instructor for YOU. What works for your friend might not work for you. Take your time, do your research, and you'll find someone who can guide you through this important milestone.
    `,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    author: "Cecil Denny",
    date: "February 2026",
    readTime: "4 min read",
    category: "Learning Tips",
  },
  {
    slug: "manual-vs-automatic-which-is-right-for-you",
    title: "Manual vs Automatic: Which Is Right for You?",
    excerpt: "An honest comparison of manual and automatic cars to help you decide which licence type suits your needs and lifestyle.",
    content: `
One of the first decisions you'll need to make when learning to drive is whether to learn in a manual or automatic car. This choice will affect your licence category and future driving options.

## The Difference

**Manual cars** have a clutch pedal and gear stick. You control when to change gears, giving you more control but requiring more coordination.

**Automatic cars** automatically change gears for you. There's no clutch pedal, making driving simpler, especially in heavy traffic.

## Pros and Cons

### Manual Cars
**Advantages:**
- More driving opportunities (can drive both manual and automatic cars)
- Often cheaper to buy and maintain
- Better fuel efficiency traditionally
- More engaging driving experience for enthusiasts

**Disadvantages:**
- Steeper learning curve
- More challenging in heavy traffic
- Requires clutch control and gear coordination

### Automatic Cars
**Advantages:**
- Easier to learn
- Less stressful in traffic
- Better for those with physical limitations
- Modern automatics are often more efficient now

**Disadvantages:**
- Limited to automatic cars only (or expensive conversions)
- Generally more expensive to hire
- Higher repair costs if things go wrong

## Consider Your Lifestyle

If you live in London or another busy city with lots of stop-start traffic, an automatic might make more sense. If you need flexibility, travel regularly, or simply enjoy driving, manual could be the better choice.

## The Practical Test

Currently, if you pass your test in an automatic car, you can only drive automatics. If you pass in a manual, you can drive both. There's no such restriction if you pass in an automatic.

## Making Your Decision

There's no universally right answer - it depends on your circumstances, preferences, and what you'll be driving most often. Discuss your options with your instructor, who can help guide you based on your specific situation.

Many learners start in a manual and switch to automatic if they're struggling. Others know from day one that automatic is the right choice for them.
    `,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    author: "Cecil Denny",
    date: "January 2026",
    readTime: "4 min read",
    category: "Guide",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
