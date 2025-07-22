# Script

## awk

### split apache error log by day
> [Tue Jul 22 04:25:10.357514 2025] [proxy_http:error] [pid 590750:tid 590750] [client 10.130.245.210:45224] AH01114: HTTP: failed to make connection to backend: 127.0.0.1
```bash
awk '{print > "error-log-" $3 ".log"}' error_log-20250622
```

### split apache request log by day
> [02/Jul/2025:23:55:24 +0800] 10.130.216.221 TLSv1.2 ECDHE-RSA-AES128-GCM-SHA256 "GET /messages/stream HTTP/1.1" -
```bash
awk '{print > "ssl-request-log-" substr($0, 2, 2) ".log"}' ssl_request_log-20250622
```

### split syslog by day
> Jul 22 16:50:00 blss systemd[1]: Started Time & Date Service.
```bash
awk '{print > "message-" $2 ".log"}' messages-20250622
```
