# 🧪 Testing & Troubleshooting Guide

## ✅ TESTING CHECKLIST

### 1. Product Modal Functionality
- [ ] Homepage loads correctly
- [ ] Click "Order Now" on a menu card
  - [ ] Modal opens smoothly
  - [ ] Background is blurred
  - [ ] Can close by clicking X or overlay
- [ ] Product details display:
  - [ ] Image shown clearly
  - [ ] Name and description visible
  - [ ] Prep time badge shows
  - [ ] Price displayed in green
- [ ] Add-ons work:
  - [ ] Checkboxes toggle on/off
  - [ ] Price updates when selected
  - [ ] Multiple can be selected
  - [ ] Unselected = no price addition
- [ ] Quantity selector:
  - [ ] + button increases quantity
  - [ ] − button decreases quantity (min 1)
  - [ ] Total price recalculates
  - [ ] Works up to 99+ items
- [ ] Add to Cart:
  - [ ] Click "Add to Cart" button
  - [ ] Modal closes
  - [ ] Toast appears bottom-right
  - [ ] Toast shows checkmark ✓
  - [ ] Toast auto-hides after 3 seconds

### 2. Cart Operations
- [ ] Navbar cart icon visible
- [ ] Cart badge shows correct count
- [ ] Click cart icon opens CartDrawer
  - [ ] Drawer slides in from right
  - [ ] Overlay appears behind drawer
  - [ ] Can click overlay to close
  - [ ] Can click X to close
- [ ] Cart shows items:
  - [ ] Product image
  - [ ] Item name
  - [ ] Add-ons listed below name
  - [ ] Item total price
- [ ] Quantity controls:
  - [ ] Click + to increase
  - [ ] Click − to decrease (min 1)
  - [ ] Removes item if qty = 0
  - [ ] Total updates immediately
- [ ] Remove button:
  - [ ] 🗑️ icon visible
  - [ ] Removes item from cart
  - [ ] Count badge updates
- [ ] Empty cart state:
  - [ ] Shows empty icon 🛒
  - [ ] Message: "Your cart is empty"
  - [ ] "Continue Shopping" button
- [ ] Summary section:
  - [ ] Subtotal correct
  - [ ] Delivery = FREE
  - [ ] Total = Subtotal

### 3. Add-ons Separation Logic
- [ ] Add "Pizza" with "Extra Cheese"
  - [ ] 1 item in cart
- [ ] Add same "Pizza" with "Extra Cheese" again
  - [ ] Still 1 item, qty = 2 ✓
- [ ] Add same "Pizza" with "Extra Cheese" + "Butter"
  - [ ] Now 2 items in cart ✓ (different add-ons)
- [ ] Verify cart shows:
  - [ ] Item 1: Pizza (Qty 2) - just Extra Cheese
  - [ ] Item 2: Pizza (Qty 1) - Extra Cheese, Butter

### 4. Checkout Flow (No Login)
- [ ] CartDrawer → "Proceed to Checkout"
  - [ ] CheckoutPage loads
  - [ ] URL = `/checkout`
  - [ ] Order summary visible
- [ ] Left side form appears:
  - [ ] Full Name field
  - [ ] Email field
  - [ ] Phone field
  - [ ] Address field
  - [ ] City field
  - [ ] Postal Code field
  - [ ] Instructions field (optional)
- [ ] Right side summary shows:
  - [ ] All items with images
  - [ ] Quantities
  - [ ] Add-ons listed
  - [ ] Subtotal
  - [ ] Taxes & Charges
  - [ ] Delivery charge (FREE)
  - [ ] Total (green highlight)
- [ ] Try submitting without filling required fields
  - [ ] Alert: "Please fill in all required fields"
- [ ] AuthModal behavior:
  - [ ] Modal shows automatically (if not logged in)
  - [ ] "Don't have account?" link visible
  - [ ] Can toggle between Login/Register modes
  - [ ] Form validation works

### 5. Authentication Flow
- [ ] AuthModal shows on checkout (if not logged in)
- [ ] Login Mode:
  - [ ] Email field
  - [ ] Password field
  - [ ] "Login" button
  - [ ] Can switch to Register mode
- [ ] Register Mode:
  - [ ] Name field (required)
  - [ ] Email field (required)
  - [ ] Phone field (optional)
  - [ ] Password field (required)
  - [ ] "Create Account" button
  - [ ] Can switch to Login mode
- [ ] After successful auth:
  - [ ] Modal closes
  - [ ] Stays on CheckoutPage
  - [ ] Form auto-fills with user data (if register)
  - [ ] **Cart still has items** ✓ (NOT cleared)
- [ ] After login/register:
  - [ ] localStorage contains user
  - [ ] Reload page → User still logged in
  - [ ] Cart still visible (in memory, or localStorage if implemented)

### 6. Checkout Completion
- [ ] Fill all required delivery fields
- [ ] Click "Proceed to Payment"
  - [ ] Processing message shows
  - [ ] Button disabled while processing
  - [ ] After 1.5 sec: Success message
  - [ ] Alert: "Order placed successfully! Payment gateway would be integrated here."

### 7. Full Menu Page
- [ ] Navigate to `/full-menu`
- [ ] All 25 items display
- [ ] "Order Now" on each item
  - [ ] ProductDetailModal opens
  - [ ] Correct product shown
  - [ ] Can add to cart

### 8. Mobile Responsiveness
**Viewport 375px (Mobile):**
- [ ] ProductDetailModal
  - [ ] Single column layout
  - [ ] Image on top
  - [ ] Details below
  - [ ] Touch-friendly buttons
  - [ ] No horizontal scroll
- [ ] CartDrawer
  - [ ] Full width (100%)
  - [ ] Items list scrollable
  - [ ] Header sticky at top
- [ ] CheckoutPage
  - [ ] Form on top
  - [ ] Summary below
  - [ ] Single column
  - [ ] Readable font sizes
- [ ] Navbar
  - [ ] Desktop cart icon hidden
  - [ ] Mobile floating cart button visible
  - [ ] Positioned bottom-right
  - [ ] Shows badge correctly

**Viewport 768px (Tablet):**
- [ ] ProductDetailModal
  - [ ] 2-column layout
  - [ ] Responsive spacing
- [ ] CheckoutPage
  - [ ] Slightly adjusted columns
  - [ ] Still readable

**Viewport 1920px (Desktop):**
- [ ] All elements spaced nicely
- [ ] Full 2-column layouts
- [ ] No overflow

### 9. Edge Cases
- [ ] Add 100+ items
  - [ ] No crash
  - [ ] Badge shows large number
- [ ] Very long product names
  - [ ] No text overflow
  - [ ] Proper wrapping
- [ ] Fill form with special characters
  - [ ] Accepted
  - [ ] No validation errors
- [ ] Click same "Add to Cart" 10x
  - [ ] Quantity increases
  - [ ] Toast appears each time
- [ ] Add item, logout, login as different user
  - [ ] Cart preserved
- [ ] Open modal, close, reopen
  - [ ] Form reset to fresh state

---

## 🐛 TROUBLESHOOTING

### Modal Not Opening

**Symptom**: Click "Order Now" but nothing happens

**Check**:
```
1. Browser console (F12) - any errors?
2. Is ProductDetailModal imported in menu-card.jsx?
3. Is product state set correctly on click?
4. Is isModalOpen state true?
```

**Fix**:
```javascript
// In menu-card.jsx, verify this exists:
import ProductDetailModal from "./ProductDetailModal";
<ProductDetailModal 
  product={selectedProduct} 
  isOpen={isModalOpen} 
  onClose={handleCloseModal}
/>
```

---

### Cart Icon Not Showing Badge

**Symptom**: Cart icon visible but no count

**Check**:
```
1. Is CartProvider wrapping whole app?
2. Is getCartItemCount() returning number?
3. Is cartItems array being updated?
```

**Fix**:
```javascript
// In Navbar.jsx:
const { getCartItemCount } = useCart();
const cartCount = getCartItemCount();

{cartCount > 0 && (
  <span className="cart-badge">{cartCount}</span>
)}
```

---

### Toast Not Appearing

**Symptom**: Add item but no "Item added to cart" toast

**Check**:
```
1. Is Toast component rendered in App.js?
2. Is CartProvider wrapping app?
3. Check browser console for errors
```

**Fix**:
```javascript
// App.js must have:
import Toast from "./components/Toast";

<CartProvider>
  <Toast />  {/* Add this */}
  <BrowserRouter>...</BrowserRouter>
</CartProvider>
```

---

### Auth Modal Not Showing

**Symptom**: Go to checkout logged out, no auth modal

**Check**:
```
1. Is AuthProvider wrapping app?
2. Is showAuthModal state true?
3. Check console for errors
```

**Fix**:
```javascript
// App.js:
<AuthProvider>  {/* Wraps CartProvider */}
  <CartProvider>
    ...
  </CartProvider>
</AuthProvider>
```

---

### Cart Items Disappearing After Reload

**Symptom**: Add items, refresh page, cart empty

**Expected Behavior**: This is intentional (uses Context, not localStorage)

**To Fix** (if want persistence):
```javascript
// In Cart-context.jsx, add:
useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

// On load:
useEffect(() => {
  const saved = localStorage.getItem('cartItems');
  if (saved) setCartItems(JSON.parse(saved));
}, []);
```

---

### Form Auto-fill Not Working

**Symptom**: After login, form not filled with user data

**Check**:
```
1. Is user object populated in Auth Context?
2. Is CheckoutPage accessing user?
3. Check initialValues in form
```

**Fix**:
```javascript
// In CheckoutPage.jsx:
const { user } = useAuth();

const [deliveryForm, setDeliveryForm] = useState({
  fullName: user?.name || "",
  email: user?.email || "",
  phone: user?.phone || "",
  // ...
});
```

---

### Modal Too Small on Desktop

**Symptom**: ProductDetailModal feels cramped

**Fix in ProductDetailModal.css**:
```css
.product-detail-modal {
  max-width: 900px;  /* Increase from here */
  width: 95%;
  max-height: 90vh;
}

.modal-content {
  padding: 32px;  /* Increase from here */
  gap: 32px;
}
```

---

### Add-ons Not Calculating Price

**Symptom**: Click checkbox but price doesn't change

**Check**:
```javascript
// Verify this in ProductDetailModal.jsx:
const totalPrice = useMemo(() => {
  if (!product) return 0;
  const addOnsPrice = selectedAddOns.reduce((sum, addon) => {
    return addon.selected ? sum + addon.price : sum;
  }, 0);
  return (product.price + addOnsPrice) * quantity;
}, [product, selectedAddOns, quantity]);
```

---

### Checkout Form Fields Not Disabled During Processing

**Symptom**: Can type while processing

**Fix in CheckoutPage.jsx**:
```javascript
<input
  disabled={isProcessing}  // Add this
  // ...
/>
```

---

### LocalStorage Not Working

**Symptom**: User logs out after browser close

**Check**:
```javascript
// In Auth-context.jsx:
useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
  setIsLoading(false);
}, []);
```

**Alternative**: Check if Private Browsing mode → localStorage disabled

---

## 🧪 BROWSER TESTING

### Chrome DevTools
```
1. Open DevTools: F12
2. Console Tab:
   - Check for any errors
   - Test: useCart() and useAuth() in console
3. Network Tab:
   - Check API calls (when integrated)
4. Application Tab:
   - Check localStorage for user data
5. Device Toolbar:
   - Test mobile responsiveness
   - Ctrl+Shift+M to toggle
```

### Firefox Developer Tools
```
1. F12 to open
2. Inspector: Check DOM structure
3. Console: Check for errors
4. Storage: View localStorage
5. Responsive Design Mode: Test mobile
```

### Safari
```
1. Develop menu → Show Web Inspector
2. Same as Chrome DevTools
3. Test on real iPhone if possible
```

---

## 📊 PERFORMANCE TESTING

### Lighthouse Audit
```
1. Open DevTools
2. Lighthouse tab
3. Generate report
4. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 90+
```

### Load Testing
- Open Chrome DevTools → Network
- Throttle to "Slow 3G"
- Verify modals still open smoothly
- Forms still responsive

---

## 🎯 COMMON FIXES

| Issue | Quick Fix |
|-------|-----------|
| Styles not applying | `npm run build` and hard refresh (Ctrl+Shift+R) |
| State not updating | Check Redux DevTools or React DevTools |
| Duplicate items in cart | Clear localStorage: `localStorage.clear()` |
| Form stuck in loading | Open console, check errors |
| Modal behind overlay | Check z-index in CSS |
| Button not clickable | Check if parent has `pointer-events: none` |

---

## ✨ FINAL CHECKLIST BEFORE DEPLOYMENT

- [ ] All components render without errors
- [ ] No console errors when fully using app
- [ ] Cart operations work smoothly
- [ ] Auth flow completes successfully
- [ ] Checkout form validates correctly
- [ ] Mobile layout is responsive
- [ ] Toast notifications appear
- [ ] All modals/drawers open/close properly
- [ ] Add-ons pricing is correct
- [ ] Cart badge shows correct count
- [ ] Form auto-fill works after login
- [ ] Performance is acceptable

---

**Happy Testing! 🧪✨**
