/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.length === 0) return true;

    s = s.toLowerCase();
    let i = 0, j = s.length - 1;

    while (i < j) {
        if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
            i++;
            continue;
            }

        if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
            j--;
            continue;
            }

        if (s[i] !== s[j]) {
            return false;
            }

        i++;
        j--;
      }

      return true;

  };


  /*

  - First check if the string is empty. If it is, we return true.
  - Then convert the string to lowercase and iterate over it.
  - Check if the character is a letter or a number. If it is not, we continue to the next character.
  - If the character is a letter or a number, we compare it to the character at the other end of the string.
  - If they are not the same, we return false.
  - If we make it to the end of the string, we return true.

  */