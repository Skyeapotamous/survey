<!DOCTYPE html>
<html>
<head>
  <title>Survey</title>
  <script>
    window.onload = function() {
      const links = [
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ceQrtfH3tEeoeQx5m7U9tQgf8cdayAJJl7mbK2UchMZUMU9CUTA0UkdFT1hMOEM5WTgwOUNXWVJTWC4u",
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ceQrtfH3tEeoeQx5m7U9tQgf8cdayAJJl7mbK2UchMZUQjRHMkgzTzBFUDhWVFVXTEpDRlNGQTBEVC4u"
      ];

      const randomLink = links[Math.floor(Math.random() * links.length)];
      window.location.href = randomLink;
    };
  </script>
</head>
<body>
  Redirecting to survey...
</body>
</html>