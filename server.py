import http.server
import socketserver
import json
import os
import subprocess
import sys
import webbrowser

PORT = 8080
MAX_PORT = 8095

def run_backlink_blast():
    print("[SERVER API] 10,000+ Backlink Blast tetiklendi...")
    # Step 1: Run generate_pbn_network.py
    cmd_gen = [sys.executable, "generate_pbn_network.py"]
    res_gen = subprocess.run(cmd_gen, capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
    
    # Step 2: Git commit & push
    try:
        subprocess.run(["git", "add", "."], cwd=os.path.dirname(os.path.abspath(__file__)))
        subprocess.run(["git", "commit", "-m", "feat: Auto 10,000+ DoFollow Backlink Blast for beautyistanbulesocrts.com"], cwd=os.path.dirname(os.path.abspath(__file__)))
        push_res = subprocess.run(["git", "push", "origin", "master:main", "--force"], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
        push_success = push_res.returncode == 0
        push_msg = push_res.stdout + push_res.stderr
    except Exception as e:
        push_success = False
        push_msg = str(e)

    return {
        "status": "success",
        "total_articles": 10000,
        "total_backlinks": 30000,
        "generator_output": res_gen.stdout[-400:] if res_gen.stdout else "",
        "git_push_success": push_success,
        "git_msg": push_msg[-300:] if push_msg else "",
        "target_url": "https://beautyistanbulesocrts.com/",
        "live_pbn_url": "https://inandemir.github.io/seo-pbn-network/"
    }

class PBNRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            resp = {
                "status": "online",
                "total_articles": 10000,
                "total_backlinks": 30000,
                "target": "https://beautyistanbulesocrts.com/",
                "live_url": "https://inandemir.github.io/seo-pbn-network/"
            }
            self.wfile.write(json.dumps(resp).encode('utf-8'))
            return
        elif self.path == '/api/blast':
            result = run_backlink_blast()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
            return
        
        # Default file serving
        return super().do_GET()

    def do_POST(self):
        if self.path == '/api/blast':
            result = run_backlink_blast()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
            return
        return super().do_GET()

def start_server():
    global PORT
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(curr_dir)

    server = None
    for p in range(PORT, MAX_PORT + 1):
        try:
            server = socketserver.TCPServer(("", p), PBNRequestHandler)
            PORT = p
            break
        except OSError:
            print(f"  [i] Port {p} mesgul, diger port deneniyor...")
            continue

    if not server:
        print("[HATA] Port acilamadi!")
        sys.exit(1)

    url = f"http://localhost:{PORT}/index.html"
    print("====================================================================")
    print("  CYBER-SEO PBN BOT NETWORK - YEREL KONTROL SUNUCUSU AKTIF")
    print("  Developer: Inan Demir | Target: https://beautyistanbulesocrts.com/")
    print("====================================================================")
    print(f"  [OK] Yerel Sunucu Adresi: {url}")
    print(f"  [OK] 10,000 Backlink Statik Kasasi: http://localhost:{PORT}/backlinks.html")
    print(f"  [OK] Canli PBN Web Adresi: https://inandemir.github.io/seo-pbn-network/")
    print(f"  [OK] API Endpoint: http://localhost:{PORT}/api/blast")
    print("====================================================================")
    print("  Tarayici otomatik aciliyor... (Durdurmak icin Ctrl+C)")
    print()

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nSunucu kapatildi.")
        server.server_close()

if __name__ == "__main__":
    start_server()
