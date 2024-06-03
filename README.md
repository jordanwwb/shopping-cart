# Shopping Cart Readme
A simple shopping cart application built with Reactjs and Tailwindcss. It provides the basic functionality to display available items, add items to cart and remove items from cart.

## Requirements
- A ​main page​ that show multiple products
- When product page is clicked, it will go to a separate product ​detail page​
- Product ​detail page​ will have add to cart
- When "​Add to cart button​" is clicked, it will update the cart icon to have number of the product in the cart
- A ​cart page​ will list the products which are added to the cart
- Cart page will calculate the total amount needed to be paid
- Cart will allow the change of quantity and removal of products
- Please use ReactJs for this assignment
- Please use https://fakestoreapi.com for retrieval of products

## Installations
1. Ensure Node.js (v14 or higher) is correctly installed
2. Clone the repository
    ```
    git clone https://github.com/jordanwwb/shopping-cart.git
    cd shopping-cart
    ```
3. Install dependencies
    ```
    npm install
    ```
4. Run the application
    ```
    npm run start
    ```
5. Application will be running at `http://localhost:3000`

## Testing
- To run tests
    ```
    npm test
    ```
## Project Structure

- src/: contains the source code.
    - apis/: Reusable API management.
    - components/: Reusable UI components.
    - context/: Context for state management.
    - pages/: Main pages of the application.

## Assumptions
- Logging in is not required
- Users are able to add to cart without logging into an account


## Technical decisions
- Instead of saving the cart item details on a Database, i have decided to use context to store these infromation. This is due to the assumption that logging in would not be required. However, on a security standpoint it might be better to save the cart on a secured Database instead.
- JS packages
    - react-zoom-pan-pinch
        - This package was choosen due to its intuitive and customizable way to handle zooming, panning, and pinching actions within the application. It enhances user interaction, especially for viewing product images in detail, making the application more user-friendly and interactive.
    - react-responsive-carousel
        - This package was choosen to display the product images in a clean and reponsive manner.
    - react-icons
        - This package provide various popular icons, allowing easy integration and customization of icons.