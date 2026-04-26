# Tianrui Qiu Personal Website

Static personal portfolio site for GitHub Pages.

## Publish with GitHub Pages

1. Create a public GitHub repository named `tianruiqiu.com` or `<your-github-username>.github.io`.
2. Push these files to the repository.
3. Open the repository on GitHub.
4. Go to **Settings** > **Pages**.
5. Set **Source** to `Deploy from a branch`.
6. Choose the `main` branch and `/root`, then save.
7. In **Custom domain**, enter `tianruiqiu.com`.

## DNS records

In your domain registrar DNS settings, add these GitHub Pages records:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <your-github-username>.github.io
```

After DNS updates, GitHub may need a few minutes to a few hours to issue HTTPS.
