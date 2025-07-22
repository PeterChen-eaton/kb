# Script

## awk
1. split error log
```bash
awk '{print > "error-log-" $3 ".log"}' error_log-20250622
```

1. split apache request log
```bash
awk '{print > "ssl-request-log-" substr($0, 2, 2) ".log"}' ssl_request_log-20250622
```

1. split syslog
```bash
awk '{print > "message-" $2 ".log"}' messages-20250622
```
