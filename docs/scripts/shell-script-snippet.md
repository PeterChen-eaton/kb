# Shell Script Snippets

A collection of useful shell scripts and command-line utilities for system administration and log processing.

## Table of Contents

- [AWK Scripts](#awk-scripts)
  - [Log File Processing](#log-file-processing)

## AWK Scripts

### Log File Processing

#### Split Apache Error Log by Day

Splits Apache error logs into separate files by day based on the timestamp.

**Example log format:**
```
[Tue Jul 22 04:25:10.357514 2025] [proxy_http:error] [pid 590750:tid 590750] [client 10.130.245.210:45224] AH01114: HTTP: failed to make connection to backend: 127.0.0.1
```

**Script:**
```bash
awk '{print > "error-log-" $3 ".log"}' error_log-20250622
```

**Description:** Extracts the day from the 3rd field (e.g., "22") and creates separate log files named `error-log-22.log`.

#### Split Apache Request Log by Day

Splits Apache SSL request logs into separate files by day based on the timestamp.

**Example log format:**
```
[02/Jul/2025:23:55:24 +0800] 10.130.216.221 TLSv1.2 ECDHE-RSA-AES128-GCM-SHA256 "GET /messages/stream HTTP/1.1" -
```

**Script:**
```bash
awk '{print > "ssl-request-log-" substr($0, 2, 2) ".log"}' ssl_request_log-20250622
```

**Description:** Extracts the day from the date string using `substr()` function (positions 2-3) and creates files like `ssl-request-log-02.log`.

#### Split Syslog by Day

Splits system logs into separate files by day based on the timestamp.

**Example log format:**
```
Jul 22 16:50:00 blss systemd[1]: Started Time & Date Service.
```

**Script:**
```bash
awk '{print > "message-" $2 ".log"}' messages-20250622
```

**Description:** Uses the 2nd field (day number) to create separate log files named `message-22.log`.

---

**Tips:**
- Make sure the input files are properly formatted
- Check disk space before processing large log files
- Use with appropriate file permissions
