# 🌟 Image Enhancer using Picwish AI

An AI-powered image enhancer built using **React**, **Tailwind CSS**, **Axios**, and **Vite**. Upload any image and let Picwish AI automatically enhance it — sharpen, clear, and improve your visuals in seconds. Powered by the Picwish API.

> 🔗 **Live Demo:** [Click here to try it on Netlify](https://your-netlify-link.netlify.app)

---

## 🚀 Features

- 📤 Upload your own image (JPG/PNG)
- 🤖 Enhance image quality using Picwish AI
- ⚙️ Task ID-based processing (ensures secure and reliable image enhancement)
- 💬 Realtime feedback with loading, success, and error messages
- 🎨 Clean UI with Tailwind CSS
- 🧪 Built using Vite + React for lightning-fast development

---

## 🧠 How It Works

1. User uploads an image
2. A request is sent to Picwish API to create a task
3. The API returns a `task_id`
4. Using `task_id`, we poll the server for the enhanced image
5. Once ready, the enhanced image is displayed

> ⚠️ **Note:** This project uses the **free version** of Picwish API, which is limited to **15 credits**. After that, a paid key is required.

---

## 📁 Tech Stack

- **React** (with Hooks)
- **Vite** (for fast bundling)
- **Tailwind CSS** (for UI styling)
- **Axios** (for API requests)
- **React Router** (optional for routing pages)

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/riyak-783/image-enhancer-picwish.git
cd image-enhancer-picwish
````

2. **Install dependencies**

```bash
npm install
```

3. **Add your API key**

In src folder add and API Key

```
VITE_PICWISH_API_KEY=your_picwish_api_key
```

4. **Run the project**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

---

## 📌 Limitations

* Limited to **15 free credits** (Picwish API).
* Requires an internet connection to work.
* Enhancement process may take a few seconds depending on image size and server response.

---

## 💡 Inspiration

This project was inspired by real-world SaaS tools that use **task-based asynchronous APIs** for handling large processing tasks like image enhancement, PDF conversion, and more.


