# 🎤 rbx-name 🎤

Generates & validates untaken usernames for roblox.

### 📜 config.toml

```toml
[username]
characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
# characters to be randomly picked from. (use a list of syllables for pronounceable (fake) words)
length = 6
# number of characters a generated username will have
prefix = ""
# text to be added to the start of a generated name (ignores length)
suffix = ""
# text to be added to the end of a generated name (ignores length)

[misc]
mode = 1
# 1 = generate random usernames using settings above
# 2 = check every line of "tocheck.txt" (outputs to "valid.txt")
type = 1
# 1 = player usernames
# 2 = group names (filters via search results. WHICH ONLY FILTERS SOME NAMES)
time_between_checks = 0.1
# time between api requests in seconds
```
