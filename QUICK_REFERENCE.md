# 🎯 Quick Reference - Food Ordering System

## User Journey Map

```
START HERE
    ↓
┌─────────────────────────────────────┐
│  BROWSE MENU (No login required)    │
│  • Homepage                         │
│  • Click "Order Now" on any item    │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│  PRODUCT DETAIL MODAL OPENS         │
│  • View image                       │
│  • Select add-ons                   │
│  • Choose quantity                  │
│  • See dynamic total price          │
│  • Click "Add to Cart"              │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│  TOAST CONFIRMATION SHOWS           │
│  "Item added to cart! ✓"            │
│  (Auto-dismisses in 3 seconds)      │
└─────────────────────────────────────┘
    ↓
   MORE   ──► Continue shopping
 ITEMS?      Click menu → back to step 1
    │
    NO
    ↓
┌─────────────────────────────────────┐
│  CLICK CART ICON IN NAVBAR          │
│  • Badge shows item count           │
│  • CartDrawer slides in from right  │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│  REVIEW CART                        │
│  • See all items                    │
│  • Adjust quantities                │
│  • Remove items if needed           │
│  • View total                       │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│  CLICK "PROCEED TO CHECKOUT"        │
└─────────────────────────────────────┘
    ↓
   LOGGED   ──► NO ──► AuthModal opens
   IN?           │      • Login OR Register
    │            │      • Form validation
    YES          │      • Cart persists
    │            │      • Auto-redirect
    └────────────┘
    ↓
┌─────────────────────────────────────┐
│  CHECKOUT PAGE LOADS                │
│  LEFT: Delivery Form                │
│  • Full Name                        │
│  • Email                            │
│  • Phone                            │
│  • Address                          │
│  • City, Postal Code                │
│  • Special Instructions             │
│                                     │
│  RIGHT: Order Summary               │
│  • Items list with images           │
│  • Add-ons shown                    │
│  • Subtotal                         │
│  • Delivery charge                  │
│  • TOTAL AMOUNT                     │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│  CLICK "PROCEED TO PAYMENT"         │
│  (Payment gateway integration here) │
│  • Order placed!                    │
│  • Success message                  │
└─────────────────────────────────────┘
```

---

## Component Files Reference

| File | Purpose | Can Click Through |
|------|---------|-------------------|
| `ProductDetailModal.jsx` | Show product with add-ons | ✅ Yes - Opens on "Order Now" |
| `CartDrawer.jsx` | View & manage cart | ✅ Yes - Opens on cart icon |
| `AuthModal.jsx` | Login/Register | ✅ Yes - Shows on checkout if not logged in |
| `CheckoutPage.jsx` | Final order review | ✅ Yes - Route to `/checkout` |
| `Toast.jsx` | Notifications | Auto-shows on add to cart |

---

## Key Props & State Variables

### ProductDetailModal
```javascript
product={selectedProduct}      // Full food object from FoodData
isOpen={isModalOpen}           // Boolean to show/hide
onClose={handleCloseModal}     // Callback when close button clicked
```

### CartDrawer
```javascript
isOpen={isCartOpen}            // Boolean to show/hide
onClose={() => setIsCartOpen(false)}  // Callback when close
```

### AuthModal
```javascript
isOpen={showAuthModal}         // Boolean to show/hide
onClose={() => setShowAuthModal(false)}  // Callback
onLoginSuccess={handleAuthSuccess}  // Called after successful login
```

---

## Data Flow Diagram

```
FoodData Array
    ↓
    └─→ Menu Card Component
         ├─ onClick → ProductDetailModal
         └─ onClick → Full Menu Page → ProductDetailModal
    
ProductDetailModal
    ├─ Add to Cart button
    │   ↓
    └─→ Cart Context
         ├─ addToCart(item)
         ├─ showToast("Item added!")
         └─ Update cartItems[]

Cart Icon
    ├─ Displays getCartItemCount()
    └─ onClick → CartDrawer

CartDrawer
    ├─ Shows cartItems[]
    ├─ updateQuantity(id, qty)
    ├─ removeFromCart(id)
    └─ Proceed to Checkout → CheckoutPage

CheckoutPage
    ├─ Check Auth Context
    │   └─ If !authenticated → AuthModal
    │       └─ login/register → persist cart → stay on checkout
    ├─ Fill delivery form
    ├─ Show order summary from cartItems[]
    └─ Click "Proceed to Payment" → (Payment gateway ready)
```

---

## Important Functions

### Cart Context
```javascript
// Add item with add-ons
addToCart({
  id: 1,
  name: "Pizza",
  price: 150,
  selectedAddOns: [{label: "Extra Cheese", price: 20, selected: true}],
  quantity: 2,
  image: "...",
  description: "..."
})

// Get cart info
getCartTotal()      // Returns: 340 (if above item)
getCartItemCount()  // Returns: 2

// Update quantity
updateQuantity(cartItemId, 3)

// Remove item
removeFromCart(cartItemId)
```

### Auth Context
```javascript
// Register new user
register({
  email: "user@email.com",
  password: "123456",
  name: "John",
  phone: "9876543210"
})

// Login
login("user@email.com", "123456")

// Check auth status
if (user) { /* logged in */ }
if (isAuthenticated) { /* logged in */ }

// Logout
logout()
```

---

## Styling Reference

### Color Palette
```css
Primary Purple:    #667eea
Dark Purple:       #764ba2
Success Green:     #00b894
Dark Text:         #2d3436
Gray Text:         #636e72
Light Gray:        #f0f0f0
Border Gray:       #ddd
Error Red:         #d63031
```

### Common CSS Classes
```css
/* Buttons */
.order-now-btn         /* Purple gradient button */
.checkout-btn          /* Full-width gradient button */
.qty-btn               /* Quantity +/- button */

/* Layout */
.modal-overlay         /* Blurred dark background */
.cart-drawer           /* Side drawer container */
.cart-items-list       /* Scrollable items in cart */

/* States */
.open                  /* Drawer is visible */
.active                /* Category/button selected */
.disabled              /* Button disabled state */
```

---

## Testing Scenarios

### ✅ Test Cart Logic
1. Add Pizza with "Extra Cheese"
2. Add same Pizza with "Extra Cheese" + "Butter"
   - Should create 2 separate cart entries
3. Add same Pizza with "Extra Cheese" again
   - Should increase quantity of first entry (not create new)

### ✅ Test Auth Flow
1. Add items to cart (no login)
2. Go to checkout
3. AuthModal shows
4. Register new account
5. Verify: Cart items still there ✓

### ✅ Test Responsive
1. Open on desktop (1920px)
2. Verify: ProductDetailModal is 2-column
3. Open on tablet (768px)
4. Verify: Modal switches to 1-column
5. Open on mobile (375px)
6. Verify: CartDrawer goes full-width

### ✅ Test Notifications
1. Add item → Toast appears bottom-right
2. Toast shows: "✓ Item added to cart!"
3. After 3 sec → Toast disappears
4. Multiple adds → Multiple toasts stack

---

## URL Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | VideoPage | Landing page |
| `/homepage` | Homepage | Main menu page |
| `/menu-section` | MenuSection | Browse menu |
| `/full-menu` | FullMenuPage | All items (with modal) |
| `/checkout` | CheckoutPage | Order summary & form |
| `/cart` | CartPage | Legacy cart page |
| `/Order-Page/:id` | OrderPage | Legacy item page |

---

## Browser DevTools Tips

### Check Cart State
```javascript
// In browser console:
// From useCart hook
console.log(cartItems)
console.log(getCartTotal())
console.log(getCartItemCount())
```

### Check Auth State
```javascript
// In browser console:
// From useAuth hook
console.log(user)
console.log(isAuthenticated)
```

### Check LocalStorage
```javascript
// In browser console:
localStorage.getItem('user')  // Shows logged-in user
// Clear:
localStorage.removeItem('user')
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Modal not opening | Check `isOpen` state is true |
| Cart count not updating | Verify `getCartItemCount()` is called after add |
| Items not appearing in checkout | Check `cartItems[]` has data in Cart Context |
| Auth modal stuck | Verify `onLoginSuccess()` is called after login |
| Toast not showing | Check `useToast()` hook is in App.js with Provider |
| Styling looks wrong | Clear browser cache: Ctrl+Shift+Delete |

---

## Next: Payment Integration

When ready to add payments, modify `CheckoutPage.jsx`:

```javascript
// Replace this:
<button className="place-order-btn" onClick={handlePlaceOrder}>
  Proceed to Payment
</button>

// With Razorpay integration:
const handlePayment = async () => {
  const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: getCartTotal() * 100, // Amount in paise
    currency: "INR",
    // ... rest of Razorpay config
  };
  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
```

---

**Remember**: Build first, integrate payments later! ✅
