export const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      skills: 'SKILLS',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      contact: 'CONTACT',
    },
    hero: {
      subtop: 'Available for New Opportunities',
      name: 'Nguyễn Quốc Hùng',
      title: 'Front-End Developer',
      description: 'I craft beautiful, performant user interfaces with React and Next.js. Passionate about building pixel-perfect experiences.',
      botGreeting: 'hello, i am a frontend dev',
      buttonPrimary: 'Explore My Work',
      buttonSecondary: 'Contact Me',
    },
    about: {
      title: 'ABOUT',
      paragraph1: 'I\'m a Front-End Developer passionate about crafting accessible, pixel-perfect digital experiences for the web. With a strong foundation in React and Next.js, I specialize in building modern, responsive interfaces that prioritize user experience and performance.',
      paragraph2: 'Currently, I\'m expanding my expertise in full-stack development while maintaining a deep focus on frontend technologies. My journey involves working with diverse tech stacks, from internal product platforms to customer-facing applications, always prioritizing code quality and user satisfaction.',
      paragraph3: 'When I\'m not coding, you\'ll find me exploring new technologies, listening to US/UK music, and continuously learning to stay at the cutting edge of web development.',
      location: 'LOCATION',
      locationValue: 'Hà Nội, Vietnam',
      education: 'EDUCATION',
      educationSchool: 'University of Transport and Communications',
      educationFaculty: 'Faculty of Information Technology',
      educationPeriod: '2020 - 2025',
      goal: 'GOAL',
      goalValue: 'Become a professional Front-End Developer and valuable team player in the field.',
    },
    skills: {
      title: 'SKILLS',
      frontendTitle: 'Frontend Expertise',
      toolsTitle: 'Tools & Technologies',
      languagesTitle: 'LANGUAGES',
      english: 'English',
      vietnamese: 'Vietnamese',
      englishLevel: 'Pre-intermediate',
      vietnameseLevel: 'Native',
    },
    experience: {
      title: 'EXPERIENCE',
      list: [
        {
          company: 'Lifestyle Vietnam',
          position: 'Marketing Developer',
          period: 'Apr 2026 - Present',
          responsibilities: [
            'Built and maintained an automated social media pipeline using n8n and a custom TypeScript monorepo (Node.js, Express, Prisma)',
            'Automated end-to-end content workflows: topic ingestion from Google Sheets → AI caption generation (Ollama, Gemini) → image rendering (Stable Diffusion, Gemini Image API) → auto-publishing to Facebook and TikTok',
            'Designed a custom Workflow Engine with fault tolerance: step-by-step execution logging, auto-retry with exponential backoff, and resume-from-last-step capability',
            'Integrated multiple AI and social media APIs: Google Gemini, Ollama (local LLM), Replicate, Runway ML, OpenAI Vision, Facebook Graph API, TikTok API'
          ]
        },
        {
          company: 'Lifestyle Vietnam',
          position: 'Game Developer Intern',
          period: 'Feb 2026 - Apr 2026',
          responsibilities: [
            'Developed educational mini-games for children (ages 3–6) using Phaser 3 and Vite + TypeScript, covering mechanics such as lasso selection, drag-to-match, trace & paint letters, and voice-based pronunciation scoring',
            'Integrated games with the Iruka Edu SDK to handle game lifecycle, session tracking, and score reporting',
            'Built automation scripts (Node.js) to mass-patch SDK compliance across 13+ game projects simultaneously, significantly reducing manual effort',
            'Implemented voice-based learning features: microphone recording, audio submission to backend APIs, and real-time pronunciation scoring'
          ]
        },
        {
          company: '3i Company',
          position: 'Front-End Developer',
          period: 'Feb 2025 - Sep 2025',
          responsibilities: [
            'Developed UI modules using Next.js and Angular for internal product and customer management platforms',
            'Integrated front-end with .NET backend, ensuring synchronized and secure data flow',
            'Built landing pages, dashboards, and interactive charts using Recharts and Chart.js',
            'Optimized rendering performance with SSR, lazy loading, and caching techniques',
            'Handled client-side authentication, authorization, and UI role management',
            'Participated in Agile/Scrum workflows with Git and Docker in a CI/CD pipeline'
          ]
        },
        {
          company: 'LANCS NETWORKS',
          position: 'Front-End Developer Intern',
          period: 'May 2023 - Aug 2023',
          responsibilities: [
            'Developed UI with ReactJS and Tailwind CSS based on Figma designs',
            'Built mobile application screens using React Native for internal use',
            'Supported modules including data input forms, list views, and simple dashboards',
            'Fixed UI/UX issues and improved usability based on QA feedback',
            'Used GitLab for source control'
          ]
        }
      ]
    },
    projects: {
      title: 'PROJECTS',
      keyFeatures: 'KEY FEATURES',
      techStack: 'TECH STACK',
      viewGithub: 'GitHub',
      viewMore: 'Explore more projects and repositories on my',
      copyright: '© 2025 Nguyễn Quốc Hùng. All rights reserved.',
      list: [
        {
          title: 'Legal AI – Legal Information Synthesis System',
          description: 'A specialized AI system designed to synthesize Vietnamese legal information using Retrieval-Augmented Generation (RAG) and controlled legal reasoning. Provides real-time, evidence-based answers streamed via Server-Sent Events (SSE).',
          features: [
            'Controlled Legal Reasoning: Generates insights strictly based on statutory provisions to ensure accuracy',
            'Structured Output: Responses follow a standardized format — Legal Conclusion + Legal Basis',
            'Streaming Responses: Real-time text generation for improved UX',
            'Multi-language Support: Uses Sentence-Transformers for Vietnamese language processing'
          ],
          techStack: ['Python', 'FastAPI', 'Uvicorn', 'Sentence-Transformers', 'Semantic Search', 'Ollama LLM', 'RAG', 'SSE'],
          links: {
            github: 'https://github.com/lovechino/legal-ai'
          }
        },
        {
          title: 'AutomaticSocialMedia – Social Media Automation Platform',
          description: 'A custom TypeScript monorepo platform that automates the full social media pipeline: generating captions with AI, rendering images/videos, and auto-publishing to Facebook & TikTok — replacing no-code tools like n8n.',
          features: [
            'Multi-Platform Workflows: Automates the entire pipeline from topic extraction (Google Sheets) → AI media generation → publishing (Facebook, TikTok)',
            'Custom Workflow Engine: Built-in fault tolerance with auto-retry, resume from last successful step, and full execution history in DB',
            'Cost-Optimized AI: Hybrid approach combining free local LLMs (Ollama) with premium APIs (Gemini, OpenAI) for optimal cost efficiency'
          ],
          techStack: ['Node.js', 'Express', 'Prisma ORM', 'SQLite', 'React', 'Vite', 'Tailwind CSS', 'Google Gemini', 'Ollama', 'Stable Diffusion', 'Facebook API', 'TikTok API', 'Monorepo'],
          links: {
            github: 'https://github.com/lovechino/AutomaticSocialMedia'
          }
        }
      ]
    },
    contact: {
      title: 'CONTACT',
      description: 'I\'m always interested in hearing about new opportunities and interesting projects. Feel free to reach out!',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      copyright: '© 2025 Nguyễn Quốc Hùng. All rights reserved.',
    },
  },
  vi: {
    nav: {
      about: 'VỀ TÔI',
      skills: 'KỸ NĂNG',
      experience: 'KINH NGHIỆM',
      projects: 'DỰ ÁN',
      contact: 'LIÊN HỆ',
    },
    hero: {
      subtop: 'Đang sẵn sàng cho các cơ hội mới',
      name: 'Nguyễn Quốc Hùng',
      title: 'Lập Trình Viên Frontend',
      description: 'Tôi tạo ra những giao diện người dùng đẹp và hiệu năng cao với React và Next.js. Đam mê xây dựng những trải nghiệm hoàn hảo từng pixel.',
      botGreeting: 'xin chào tôi là frontend dev',
      buttonPrimary: 'Khám phá dự án',
      buttonSecondary: 'Liên hệ ngay',
    },
    about: {
      title: 'VỀ TÔI',
      paragraph1: 'Tôi là một lập trình viên Frontend đam mê tạo ra những trải nghiệm kỹ thuật số dễ tiếp cận và hoàn hảo từng pixel. Với nền tảng vững chắc trong React và Next.js, tôi chuyên xây dựng các giao diện hiện đại, đáp ứng mọi kích thước màn hình với ưu tiên trên trải nghiệm người dùng và hiệu năng.',
      paragraph2: 'Hiện tại, tôi đang mở rộng kiến thức của mình về phát triển full-stack đồng thời duy trì sự tập trung sâu sắc vào công nghệ frontend. Hành trình của tôi liên quan đến việc làm việc với nhiều ngôn ngữ lập trình đa dạng, từ các nền tảng sản phẩm nội bộ đến các ứng dụng hướng đến khách hàng, luôn ưu tiên chất lượng mã và sự hài lòng của người dùng.',
      paragraph3: 'Khi không lập trình, bạn sẽ thấy tôi khám phá các công nghệ mới, nghe nhạc Mỹ/Anh và liên tục học hỏi để luôn ở đỉnh của phát triển web.',
      location: 'ĐỊA ĐIỂM',
      locationValue: 'Hà Nội, Việt Nam',
      education: 'GIÁO DỤC',
      educationSchool: 'Đại học Giao thông Vận tải',
      educationFaculty: 'Khoa Công nghệ Thông tin',
      educationPeriod: '2020 - 2025',
      goal: 'MỤC TIÊU',
      goalValue: 'Trở thành một lập trình viên Frontend chuyên nghiệp và là một thành viên có giá trị trong đội ngũ.',
    },
    skills: {
      title: 'KỸ NĂNG',
      frontendTitle: 'Chuyên môn Frontend',
      toolsTitle: 'Công cụ và Công nghệ',
      languagesTitle: 'NGÔN NGỮ',
      english: 'Tiếng Anh',
      vietnamese: 'Tiếng Việt',
      englishLevel: 'Giao tiếp cơ bản (Pre-intermediate)',
      vietnameseLevel: 'Bản xứ',
    },
    experience: {
      title: 'KINH NGHIỆM',
      list: [
        {
          company: 'Lifestyle Vietnam',
          position: 'Lập trình viên Marketing',
          period: 'Tháng 4 2026 - Hiện tại',
          responsibilities: [
            'Xây dựng và duy trì luồng dữ liệu truyền thông tự động sử dụng n8n và TypeScript monorepo tùy chỉnh (Node.js, Express, Prisma)',
            'Tự động hóa toàn trình quy trình tạo nội dung: lấy chủ đề từ Google Sheets → AI tạo caption (Ollama, Gemini) → render ảnh (Stable Diffusion, Gemini) → đăng bài tự động trên Facebook và TikTok',
            'Thiết kế Workflow Engine tùy chỉnh với khả năng chịu lỗi: ghi log từng bước, tự động thử lại với exponential backoff, và tiếp tục từ bước cuối cùng',
            'Tích hợp nhiều API AI và mạng xã hội: Google Gemini, Ollama (LLM cục bộ), Replicate, Runway ML, OpenAI Vision, Facebook Graph API, TikTok API'
          ]
        },
        {
          company: 'Lifestyle Vietnam',
          position: 'Lập trình viên Game (Thực tập)',
          period: 'Tháng 2 2026 - Tháng 4 2026',
          responsibilities: [
            'Phát triển các mini-game giáo dục cho trẻ em (3-6 tuổi) sử dụng Phaser 3 và Vite + TypeScript, bao gồm các cơ chế như kéo thả, nối điểm, tập tô chữ cái và chấm điểm phát âm bằng giọng nói',
            'Tích hợp game với Iruka Edu SDK để quản lý vòng đời trò chơi, theo dõi phiên chơi và báo cáo điểm số',
            'Xây dựng các kịch bản tự động hóa (Node.js) để cập nhật và tuân thủ chuẩn SDK hàng loạt trên 13+ dự án game, giảm thiểu đáng kể thao tác thủ công',
            'Triển khai các tính năng học qua giọng nói: ghi âm microphone, gửi âm thanh qua API backend và chấm điểm phát âm theo thời gian thực'
          ]
        },
        {
          company: 'Công ty 3i',
          position: 'Lập Trình Viên Frontend',
          period: 'Tháng 2 2025 - Tháng 9 2025',
          responsibilities: [
            'Phát triển các mô-đun UI bằng Next.js và Angular cho các nền tảng sản phẩm nội bộ và quản lý khách hàng',
            'Tích hợp front-end với backend .NET, đảm bảo luồng dữ liệu đồng bộ và an toàn',
            'Xây dựng các trang đích (landing pages), bảng điều khiển và biểu đồ tương tác bằng Recharts và Chart.js',
            'Tối ưu hóa hiệu năng render với SSR, lazy loading và các kỹ thuật caching',
            'Xử lý xác thực, ủy quyền phía client và quản lý phân quyền UI',
            'Tham gia quy trình làm việc Agile/Scrum cùng Git và Docker trong CI/CD pipeline'
          ]
        },
        {
          company: 'LANCS NETWORKS',
          position: 'Lập Trình Viên Frontend (Thực tập)',
          period: 'Tháng 5 2023 - Tháng 8 2023',
          responsibilities: [
            'Phát triển giao diện bằng ReactJS và Tailwind CSS dựa trên thiết kế Figma',
            'Xây dựng các màn hình ứng dụng di động bằng React Native để sử dụng nội bộ',
            'Hỗ trợ các mô-đun như biểu mẫu nhập dữ liệu, danh sách và bảng điều khiển đơn giản',
            'Sửa các lỗi UI/UX và cải thiện trải nghiệm người dùng dựa trên phản hồi của QA',
            'Sử dụng GitLab để quản lý mã nguồn'
          ]
        }
      ]
    },
    projects: {
      title: 'DỰ ÁN',
      keyFeatures: 'CÁC TÍNH NĂNG CHÍNH',
      techStack: 'NGÔN NGỮ LẬP TRÌNH',
      viewGithub: 'GitHub',
      viewMore: 'Khám phá thêm các dự án và kho lưu trữ của tôi trên',
      copyright: '© 2025 Nguyễn Quốc Hùng. Tất cả các quyền được bảo lưu.',
      list: [
        {
          title: 'Legal AI – Hệ thống Tổng hợp Thông tin Pháp lý',
          description: 'Một hệ thống AI chuyên biệt được thiết kế để tổng hợp thông tin pháp lý Việt Nam thông qua Retrieval-Augmented Generation (RAG) và lập luận pháp lý được kiểm soát. Hệ thống cung cấp các câu trả lời dựa trên bằng chứng theo thời gian thực được truyền phát qua Server-Sent Events (SSE).',
          features: [
            'Lập luận Pháp lý Được kiểm soát: Tạo ra kết quả dựa hoàn toàn trên các quy định pháp luật được cung cấp để đảm bảo tính chính xác',
            'Đầu ra có cấu trúc: Cung cấp câu trả lời theo định dạng tiêu chuẩn — Kết luận pháp lý + Căn cứ pháp lý',
            'Phản hồi Streaming: Tạo văn bản theo thời gian thực để nâng cao trải nghiệm người dùng',
            'Hỗ trợ đa ngôn ngữ: Sử dụng Sentence-Transformers để xử lý ngôn ngữ tiếng Việt'
          ],
          techStack: ['Python', 'FastAPI', 'Uvicorn', 'Sentence-Transformers', 'Semantic Search', 'Ollama LLM', 'RAG', 'SSE'],
          links: {
            github: 'https://github.com/lovechino/legal-ai'
          }
        },
        {
          title: 'AutomaticSocialMedia – Nền tảng tự động hóa Mạng xã hội',
          description: 'Nền tảng custom bằng TypeScript monorepo tự động hóa toàn bộ quy trình lên bài trên mạng xã hội: tạo caption bằng AI, render hình ảnh/video, và tự động đăng bài lên Facebook & TikTok — thay thế các công cụ no-code như n8n.',
          features: [
            'Luồng công việc đa nền tảng: Tự động hóa từ bước lấy chủ đề (Google Sheets) → AI tạo media → đăng tải (Facebook, TikTok)',
            'Workflow Engine tùy chỉnh: Tích hợp sẵn khả năng chịu lỗi, tự động retry, tiếp tục từ bước thành công cuối cùng, và lưu toàn bộ lịch sử thực thi vào DB',
            'Tối ưu chi phí AI: Kết hợp giữa LLM cục bộ miễn phí (Ollama) với các API trả phí (Gemini, OpenAI) để đạt hiệu quả chi phí tốt nhất'
          ],
          techStack: ['Node.js', 'Express', 'Prisma ORM', 'SQLite', 'React', 'Vite', 'Tailwind CSS', 'Google Gemini', 'Ollama', 'Stable Diffusion', 'Facebook API', 'TikTok API', 'Monorepo'],
          links: {
            github: 'https://github.com/lovechino/AutomaticSocialMedia'
          }
        }
      ]
    },
    contact: {
      title: 'LIÊN HỆ',
      description: 'Tôi luôn quan tâm đến việc tìm hiểu về những cơ hội mới và các dự án thú vị. Hãy liên hệ với tôi!',
      email: 'Email',
      phone: 'Điện thoại',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      copyright: '© 2025 Nguyễn Quốc Hùng. Tất cả các quyền được bảo lưu.',
    },
  },
};
