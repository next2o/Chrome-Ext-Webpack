# Next₂O

## Background

Server-side rendering frameworks built on React.js can create hydration errors that are often difficult to debug. Hydration errors can slow development time and slow website performance. 

React offers hydration error warnings that lack specificity, with an additional option to suppress hydration errors, although that doesn’t solve the problem and applications pushed to production with errors can experience performance erosion.

## How It Works

#### 1. Download the Next2O extension from the Chrome store

#### 2. Navigate to the Chrome tab you'd like to debug

This works in development as well as production apps.

#### 3. Click on the Next₂O extension to open

When you open the extension, the 'debug' tab automatically loads. You should see your DOM tree, as well as a list of notes below (if there are any). Each note has the name of the node, the location in the tree, and a message. See the color code below to see what each note color means:

##### Color Code: 

Red - Hydration Error
Green - HTML Nesting Note
Blue - Rendered From Client-Side

<img width="974" alt="Screenshot 2023-02-11 at 11 31 56 AM" src="https://user-images.githubusercontent.com/90646236/218277799-24ffa88a-48c4-419f-9cdd-432a80d94dea.png">

#### 4. Go to the 'Performance' tab to run Lighthouse for Performance metrics. This displays the SEO, Performance and Accessibility scores.

#### 5. Click on ‘Save Data’ to store your performance data for Analysis

Make sure you're signed in to Google Chrome to save information. We used your Google ID to save information so that you can access performance history for your site no matter where you're logged in.

<img width="958" alt="Screenshot 2023-02-11 at 11 32 41 AM" src="https://user-images.githubusercontent.com/90646236/218277814-752fa3d4-7c1b-4ae5-b7fd-60f102606385.png">

#### 6. View descriptions for each metric from the lighthouse audits, displayed for quick overview and understanding.

## Contribute

If you have any issues using our debugging tool, please submit an issue on GitHub. You're welcome to fork our repo and test changes yourself, but we ask that contributors make an official pull request for any features they'd like to add, or bug fixes.

### Website

next2o.org
