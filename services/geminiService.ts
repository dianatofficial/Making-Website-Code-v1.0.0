import { ProjectPlan } from '../types';

// This is a MOCK service. In a real application, you would import and use @google/genai.
// import { GoogleGenAI, Type } from "@google/genai";
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MOCK_DELAY = 2500;

export const generateProjectPlan = (idea: string): Promise<ProjectPlan> => {
  console.log("Simulating Gemini API call to generate project plan for:", idea);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projectName: "پلتفرم وبلاگ‌نویسی مدرن",
        description_fa: "یک پلتفرم وبلاگ‌نویسی کامل با قابلیت‌های اجتماعی، پنل مدیریت محتوا و طراحی مدرن که بر اساس اصول SOLID و Clean Code ساخته شده است.",
        architectureHighlights: [
          {
            title: "طراحی موبایل-فرست",
            description_fa: "رابط کاربری با الهام از iOS، مینیمال و کاملاً واکنش‌گرا با استفاده از Tailwind CSS طراحی شده است.",
            icon: "Smartphone"
          },
          {
            title: "معماری مدرن Vite",
            description_fa: "پروژه با Vite ساخته شده و از Code-Splitting با React.lazy برای بارگذاری بهینه صفحات بهره می‌برد.",
            icon: "Component"
          },
          {
            title: "Clean & Logical Code",
            description_fa: "کدنویسی تمیز، ماژولار و با کامپوننت‌سازی پیشرفته برای نگهداری و توسعه آسان.",
            icon: "FileCode2"
          },
          {
            title: "مدیریت وضعیت با Zustand",
            description_fa: "استفاده از کتابخانه Zustand برای مدیریت وضعیت سراسری به شکلی ساده، بهینه و قدرتمند.",
            icon: "Store"
          },
          {
            title: "تست و پایداری",
            description_fa: "ساختار پروژه شامل فایل‌های نمونه و پیکربندی برای تست با Jest و React Testing Library است.",
            icon: "TestTube"
          },
          {
            title: "کاملاً Dockerized",
            description_fa: "پروژه نهایی به همراه فایل‌های Dockerfile و docker-compose.yml برای راه‌اندازی آسان ارائه می‌شود.",
            icon: "Container"
          }
        ],
        technologies: {
          frontend: {
            name: "React (Vite), TypeScript, Tailwind CSS",
            description_fa: "یک ترکیب مدرن برای ساخت رابط‌های کاربری سریع، مقیاس‌پذیر و زیبا."
          },
          backend: {
            name: "Node.js (Express), TypeScript",
            description_fa: "یک محیط اجرایی قدرتمند و پرکاربرد برای ساخت APIهای سریع و امن."
          },
          database: {
            name: "PostgreSQL",
            description_fa: "یک پایگاه داده رابطه‌ای پیشرفته و قابل اعتماد برای ذخیره‌سازی داده‌ها."
          }
        },
        databaseSchema: {
          description_fa: "ساختار پایگاه داده برای ذخیره اطلاعات کاربران، پست‌ها و نظرات طراحی شده است.",
          tables: {
            users: {
              columns: {
                id: "SERIAL PRIMARY KEY",
                username: "VARCHAR(255) UNIQUE NOT NULL",
                email: "VARCHAR(255) UNIQUE NOT NULL",
                password_hash: "VARCHAR(255) NOT NULL",
                created_at: "TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
              }
            },
            posts: {
              columns: {
                id: "SERIAL PRIMARY KEY",
                author_id: "INTEGER NOT NULL",
                title: "VARCHAR(255) NOT NULL",
                content: "TEXT NOT NULL",
                created_at: "TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
              },
              relations: ["FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE"]
            }
          }
        },
        backendAPI: {
          description_fa: "مجموعه‌ای از Endpoints برای مدیریت کاربران، احراز هویت و عملیات مربوط به پست‌ها.",
          endpoints: {
            "POST /api/auth/register": { method: "POST", description: "ثبت نام کاربر جدید", authRequired: false },
            "POST /api/auth/login": { method: "POST", description: "ورود کاربر و دریافت توکن JWT", authRequired: false },
            "GET /api/posts": { method: "GET", description: "دریافت لیست تمام پست‌ها", authRequired: false },
            "POST /api/posts": { method: "POST", description: "ایجاد یک پست جدید", authRequired: true },
            "DELETE /api/posts/:id": { method: "DELETE", description: "حذف یک پست", authRequired: true },
          }
        },
        frontendComponents: {
          description_fa: "کامپوننت‌های فرانت‌اند به صورت ماژولار و قابل استفاده مجدد طراحی شده‌اند.",
          components: ["Layout", "Navbar", "PostCard", "PostDetailView", "LoginForm", "RegisterForm", "CreatePostModal", "ProfilePage"]
        }
      });
    }, MOCK_DELAY);
  });
};

export const generateProjectCode = (plan: ProjectPlan): Promise<{ success: boolean; zipUrl: string }> => {
    console.log("Simulating Gemini API call to generate project code based on plan:", plan.projectName);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, zipUrl: "/mock-project.zip" });
        }, 5000);
    });
};