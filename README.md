# 🌸 Todo List - Kawaii Style

แอพจัดการงาน (Todo List) สไตล์ญี่ปุ่น น่ารักๆ สร้างด้วย Next.js และ Tailwind CSS

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)

---

## 📋 สารบัญ

- [ฟีเจอร์](#-ฟีเจอร์)
- [เทคโนโลยีที่ใช้](#-เทคโนโลยีที่ใช้)
- [โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [วิธีติดตั้งและรัน](#-วิธีติดตั้งและรัน)
- [อธิบายโค้ดแต่ละไฟล์](#-อธิบายโค้ดแต่ละไฟล์)
- [การทำงานของแอพ](#-การทำงานของแอพ)
- [เรียนรู้เพิ่มเติม](#-เรียนรู้เพิ่มเติม)

---

## ✨ ฟีเจอร์

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| ➕ เพิ่ม Todo | พิมพ์งานใหม่แล้วกด Enter หรือกดปุ่ม + |
| ✏️ แก้ไข Todo | ดับเบิลคลิกที่ข้อความเพื่อแก้ไข |
| ✅ เสร็จสิ้น Todo | คลิกที่หัวใจเพื่อทำเครื่องหมายเสร็จ |
| 🗑️ ลบ Todo | กดปุ่มถังขยะ (แสดงเมื่อ hover) |
| 🔍 กรอง Todo | ดูทั้งหมด / ยังไม่เสร็จ / เสร็จแล้ว |
| 🧹 ล้างที่เสร็จแล้ว | ลบ todos ที่เสร็จแล้วทั้งหมด |
| 💾 บันทึกอัตโนมัติ | ข้อมูลถูกเก็บใน localStorage |

---

## 🛠 เทคโนโลยีที่ใช้

### Framework & Library

| เทคโนโลยี | เวอร์ชัน | ใช้ทำอะไร |
|-----------|---------|-----------|
| **Next.js** | 16 | React Framework สำหรับสร้างเว็บแอพ |
| **React** | 19 | Library สำหรับสร้าง UI |
| **TypeScript** | 5 | ภาษา JavaScript + Type Safety |
| **Tailwind CSS** | 4 | CSS Framework สำหรับ styling |

### คำอธิบายง่ายๆ

- **Next.js** = เหมือนโครงบ้าน ช่วยจัดการหน้าเว็บ, routing, และอื่นๆ
- **React** = เครื่องมือสร้าง UI แบบ component (ชิ้นส่วนย่อยๆ ที่ประกอบกัน)
- **TypeScript** = JavaScript ที่มีการระบุ type ทำให้โค้ดปลอดภัยขึ้น
- **Tailwind CSS** = เขียน CSS ด้วย class สั้นๆ เช่น `bg-pink-500` แทนการเขียน CSS แยกไฟล์

---

## 📁 โครงสร้างโปรเจค

```
todo-list-fe-demo/
├── src/                      # โฟลเดอร์หลักเก็บโค้ด
│   ├── app/                  # หน้าเว็บและ layout (Next.js App Router)
│   │   ├── globals.css       # CSS ทั่วไป, สี, animations
│   │   ├── layout.tsx        # Layout หลัก (ครอบทุกหน้า)
│   │   ├── page.tsx          # หน้าแรก (/)
│   │   └── favicon.ico       # ไอคอนแท็บ browser
│   │
│   ├── components/           # React Components (ชิ้นส่วน UI)
│   │   ├── TodoList.tsx      # Component หลัก จัดการ state ทั้งหมด
│   │   └── TodoItem.tsx      # Component แสดง todo แต่ละอัน
│   │
│   └── types/                # TypeScript Types
│       └── todo.ts           # กำหนด type ของ Todo
│
├── public/                   # ไฟล์ static (รูปภาพ, ไอคอน)
├── package.json              # รายการ dependencies และ scripts
├── tailwind.config.ts        # ตั้งค่า Tailwind CSS
├── tsconfig.json             # ตั้งค่า TypeScript
└── next.config.ts            # ตั้งค่า Next.js
```

---

## 🚀 วิธีติดตั้งและรัน

### ขั้นตอนที่ 1: Clone โปรเจค

```bash
git clone <repository-url>
cd todo-list-fe-demo
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies

```bash
npm install
```

คำสั่งนี้จะดาวน์โหลด library ทั้งหมดที่โปรเจคต้องใช้ (ตาม package.json)

### ขั้นตอนที่ 3: รัน Development Server

```bash
npm run dev
```

### ขั้นตอนที่ 4: เปิด Browser

ไปที่ [http://localhost:3000](http://localhost:3000)

---

## 📖 อธิบายโค้ดแต่ละไฟล์

### 1. `src/types/todo.ts` - กำหนด Type

```typescript
// กำหนดว่า Todo 1 อัน มีอะไรบ้าง
export interface Todo {
  id: string;        // รหัสเฉพาะ (ไม่ซ้ำกัน)
  text: string;      // ข้อความของ todo
  completed: boolean; // เสร็จหรือยัง (true/false)
  createdAt: Date;   // วันที่สร้าง
}

// ประเภทการกรอง
export type FilterType = "all" | "active" | "completed";
```

**ทำไมต้องมี Type?**
- ช่วยให้รู้ว่าข้อมูลมีโครงสร้างยังไง
- IDE จะแนะนำ code ให้อัตโนมัติ
- ป้องกัน bug จากการใช้ข้อมูลผิดประเภท

---

### 2. `src/components/TodoItem.tsx` - แสดง Todo แต่ละอัน

**หน้าที่:** แสดง todo 1 รายการ พร้อมปุ่มต่างๆ

**Props ที่รับเข้ามา:**
```typescript
interface TodoItemProps {
  todo: Todo;                              // ข้อมูล todo
  onToggle: (id: string) => void;          // ฟังก์ชันเมื่อกด checkbox
  onDelete: (id: string) => void;          // ฟังก์ชันเมื่อกดลบ
  onEdit: (id: string, newText: string) => void; // ฟังก์ชันเมื่อแก้ไข
}
```

**การทำงาน:**
1. แสดง checkbox (หัวใจ) - กดเพื่อ toggle เสร็จ/ไม่เสร็จ
2. แสดงข้อความ - ดับเบิลคลิกเพื่อแก้ไข
3. แสดงปุ่มลบ - hover แล้วจะเห็น

---

### 3. `src/components/TodoList.tsx` - Component หลัก

**หน้าที่:** จัดการ state ทั้งหมดของ todo list

**State ที่ใช้:**
```typescript
const [todos, setTodos] = useState<Todo[]>([]);      // รายการ todos ทั้งหมด
const [inputValue, setInputValue] = useState("");     // ข้อความใน input
const [filter, setFilter] = useState<FilterType>("all"); // ตัวกรองปัจจุบัน
const [isLoaded, setIsLoaded] = useState(false);      // โหลดจาก localStorage แล้วหรือยัง
```

**ฟังก์ชันหลัก:**
| ฟังก์ชัน | ทำอะไร |
|----------|--------|
| `addTodo()` | เพิ่ม todo ใหม่ |
| `toggleTodo(id)` | สลับสถานะเสร็จ/ไม่เสร็จ |
| `deleteTodo(id)` | ลบ todo |
| `editTodo(id, newText)` | แก้ไขข้อความ |
| `clearCompleted()` | ลบ todos ที่เสร็จแล้วทั้งหมด |

**localStorage:**
```typescript
// โหลดข้อมูลตอนเปิดเว็บ
useEffect(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    setTodos(JSON.parse(stored));
  }
}, []);

// บันทึกทุกครั้งที่ todos เปลี่ยน
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}, [todos]);
```

---

### 4. `src/app/page.tsx` - หน้าหลัก

**หน้าที่:** แสดงหน้าแรกของเว็บ

**ประกอบด้วย:**
- Background decorations (ดอกไม้, ดาว ลอยไปมา)
- `<TodoList />` component
- Footer

---

### 5. `src/app/layout.tsx` - Layout หลัก

**หน้าที่:** ครอบทุกหน้า กำหนด metadata และ font

```typescript
export const metadata: Metadata = {
  title: "🌸 Todo List | จัดการงานสุดคาวาอิ",
  description: "แอพจัดการงานสไตล์ญี่ปุ่น น่ารักๆ",
};
```

---

### 6. `src/app/globals.css` - CSS ทั่วไป

**มีอะไรบ้าง:**
- ตัวแปรสี (CSS Variables)
- Animations (fadeIn, float, bounce, sparkle)
- Background patterns
- Scrollbar styling

---

## ⚙️ การทำงานของแอพ

### Flow การเพิ่ม Todo

```
1. User พิมพ์ข้อความใน input
   ↓
2. กด Enter หรือกดปุ่ม +
   ↓
3. เรียก addTodo() function
   ↓
4. สร้าง Todo object ใหม่ (id, text, completed, createdAt)
   ↓
5. อัพเดท state: setTodos([newTodo, ...todos])
   ↓
6. React re-render UI
   ↓
7. useEffect บันทึกลง localStorage
```

### Flow การ Toggle เสร็จ

```
1. User คลิกที่หัวใจ
   ↓
2. เรียก onToggle(todo.id)
   ↓
3. TodoList รับ event, เรียก toggleTodo(id)
   ↓
4. อัพเดท state: เปลี่ยน completed เป็น true/false
   ↓
5. React re-render
   ↓
6. บันทึกลง localStorage
```

---

## 📚 เรียนรู้เพิ่มเติม

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### React
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🎨 ปรับแต่ง UI

### เปลี่ยนสี
แก้ไขที่ `src/app/globals.css`:
```css
:root {
  --background: #fff5f8;  /* สีพื้นหลัง */
  --pink-main: #ff8fbc;   /* สีชมพูหลัก */
  --lavender: #d4c4fb;    /* สีม่วงอ่อน */
}
```

### เปลี่ยน Font
แก้ไขที่ `src/app/layout.tsx`:
```typescript
import { Your_Font } from "next/font/google";
```

---

## 📝 License

MIT License - ใช้งานได้อิสระ

---

สร้างด้วย 💖 โดยใช้ Next.js & Tailwind CSS
