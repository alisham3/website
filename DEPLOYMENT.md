# Deployment Guide: Shipping Your Portfolio to Production

This guide covers deploying your static portfolio website to production with your custom domain.

## Option 1: GitHub Pages (Recommended - Free & Simple)

### Prerequisites
- Your code is in a GitHub repository
- You have a custom domain

### Step 1: Push Your Code to GitHub

```bash
# Add all your files
git add .

# Commit your changes
git commit -m "Ready for production - coming soon page"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository on github.com
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

Your site will be live at: `https://yourusername.github.io/repository-name`

### Step 3: Add Your Custom Domain

1. Still in **Settings → Pages**, scroll to **Custom domain**
2. Enter your domain (e.g., `www.yourdomain.com` or `yourdomain.com`)
3. Click **Save**
4. GitHub will create a `CNAME` file automatically (or you can create it manually)

### Step 4: Configure DNS

Go to your domain registrar (where you bought the domain) and add DNS records:

**For `www.yourdomain.com` (subdomain):**
- **Type**: CNAME
- **Name**: `www`
- **Value**: `yourusername.github.io`
- **TTL**: 3600 (or default)

**For `yourdomain.com` (apex/root domain):**
- **Type**: A
- **Name**: `@` (or leave blank)
- **Value**: Add these 4 IP addresses:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **TTL**: 3600 (or default)

### Step 5: Enable HTTPS

1. Wait 5-60 minutes for DNS to propagate
2. Go back to **Settings → Pages**
3. Check **Enforce HTTPS** (will appear once DNS is verified)
4. Enable it

**✅ Done!** Your site is live at your custom domain.

---

## Option 2: Vercel (Recommended - Fast & Modern)

### Step 1: Sign Up & Import

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New Project**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: (leave empty - static site)
   - **Output Directory**: (leave empty)
5. Click **Deploy**

Your site will be live at: `https://your-project.vercel.app`

### Step 2: Add Custom Domain

1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `www.yourdomain.com`)
4. Click **Add**

### Step 3: Configure DNS

**For `www.yourdomain.com`:**
- **Type**: CNAME
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600

**For `yourdomain.com` (apex):**
- Vercel will show you specific A records or recommend using their nameservers
- Follow the instructions shown in the Vercel dashboard

### Step 4: Wait for DNS Propagation

- Vercel automatically provisions SSL certificates
- Wait 5-60 minutes for DNS to propagate
- Your site will be live with HTTPS automatically

**✅ Done!** Your site is live at your custom domain.

---

## Option 3: Netlify (Recommended - Drag & Drop)

### Step 1: Deploy

**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your entire website folder to the Netlify dashboard
3. Your site is live immediately!

**Option B: GitHub Integration**
1. Sign up with GitHub
2. Click **Add new site** → **Import an existing project**
3. Select your repository
4. Deploy settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `/` (root)
5. Click **Deploy**

Your site will be live at: `https://random-name.netlify.app`

### Step 2: Add Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Follow the setup instructions

### Step 3: Configure DNS

**For `www.yourdomain.com`:**
- **Type**: CNAME
- **Name**: `www`
- **Value**: Your Netlify subdomain (shown in dashboard, e.g., `your-site.netlify.app`)

**For `yourdomain.com` (apex):**
- Netlify provides specific A records or you can use Netlify DNS
- Follow the instructions in the Netlify dashboard

### Step 4: Enable HTTPS

- Netlify automatically provisions SSL certificates
- Wait for DNS propagation (5-60 minutes)

**✅ Done!** Your site is live at your custom domain.

---

## Quick Comparison

| Feature | GitHub Pages | Vercel | Netlify |
|---------|-------------|--------|---------|
| **Free** | ✅ Yes | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Ease of Use** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Speed** | Fast | Very Fast | Very Fast |
| **Best For** | GitHub users | Modern workflows | Quick deploys |

---

## Recommended: GitHub Pages

Since you're already using GitHub, **GitHub Pages is the simplest option**. It's free, integrates with your repo, and handles custom domains well.

### Quick Start Commands

```bash
# Make sure everything is committed
git add .
git commit -m "Ready for production"
git push origin main

# Then follow Steps 2-5 in the GitHub Pages section above
```

---

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation (usually much faster)
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation
- Clear your browser cache

### HTTPS Not Enabling?
- Wait for DNS to fully propagate
- Make sure your domain is correctly configured
- Check that your DNS records are correct

### Site Not Updating?
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check deployment logs in your hosting platform
- Verify your latest code is pushed to GitHub

---

## Next Steps After Deployment

1. ✅ Test your site on mobile devices
2. ✅ Test all links (LinkedIn, blog, startup)
3. ✅ Verify HTTPS is working
4. ✅ Share your site! 🎉

---

## Need Help?

- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

