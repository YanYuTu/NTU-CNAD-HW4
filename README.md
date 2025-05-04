# Hello‑Docker

這是一個簡單的 Node.js Hello‑World 應用範例，示範如何使用 Docker 打包。

## 本地建構與執行

1. **Clone 本專案**  
   ```bash
   git clone https://github.com/YanYuTu/NTU-CNAD-HW4.git
   cd NTU-CNAD-HW4
   ```
2. **檢查程式碼**  
確保目錄下有以下檔案：
* package.json
* index.js
* Dockerfile

3. **建構 Docker 映像**
   ```bash
   docker build -t wesleytu/2025cloud:latest .
   ```
4. **Run container**  
   直接從 Docker Hub 拉取已上傳的映像並執行：
   ```bash
   docker run --rm wesleytu/2025cloud:latest  
   ```
   或使用本機 build 出來的：
   ```bash
   docker run --rm wesleytu/2025cloud:latest
   ```
