# Hands-on tutorial verification — 2026-10-31

## Environment

- OpenAgent source: `b3b0ab53` (initial checkout `5ea6b23de` plus the fixes discovered during this run).
- Isolated local Windows instance, SQLite, port 14000; no production database was used.
- Chat provider: OpenAI Compatible, Qwen `qwen3.8-flash` via DashScope.
- Embedding provider: Alibaba Cloud `text-embedding-v3`.
- MCP Python SDK: 2.3.0, Python 3.12; local Streamable HTTP endpoint on port 8000.
- Only fictional handbook text, order fixtures, and tutorial prompts were sent to providers.

## Actual checks

- Chat: UI returned `OpenAgent is running.` and `17 × 23 = 391`.
- History: conversations remained available after local application restarts.
- RAG: sample generated four vectors per upload; actual answer reported USD 480/calendar year, manager approval before purchase, receipts within 30 days. The Knowledge sources panel showed the matching handbook passage.
- RAG negative: a new conversation asking for dental reimbursement explicitly said the handbook did not specify the limit.
- MCP: OpenAgent synced `lookup_order`; actual chat trace called it with `ORD-1001`, received shipped / Demo Express / DEMO-4821, and the final answer matched.
- Python fixture checks: ORD-1001, ORD-1002, and ORD-9999 returned the expected shipped, processing, and not-found data. The latter two are fixture checks, not separate model-chat acceptance runs.
- Seven screenshots are actual browser captures from the local application; no generated interfaces or simulated answers.

## Required product fixes

1. Signed upload URLs were used as Windows temporary filenames. `?sig=` caused ingestion failure. The downloader now uses a neutral unique temp filename, closes it before parsing, and cleans it up on write/close errors.
2. Both chat and OpenAI-compatible document retrieval resolved the default agent's embedding configuration. They now pass the current agent's embedding provider.

The signed-URL regression test passes. Normal `go test ./txt` encounters pre-existing vet errors in docx.go and markitdown.go (non-constant fmt.Errorf format). The focused test was compiled with `go test -vet=off -c` and executed directly with `-test.run=^TestDownloadSignedURLToTempFile$`; PASS. A normal Go test launch under the generated temporary test path also encountered Windows access denied; the compiled test in the repository path ran successfully. `go build` passes.

## Website checks

Production Next.js build, static routes, metadata/canonical URLs, sitemap entries, local links, sample downloads, and screenshot responses are checked before push. Tutorial pages use the existing Fumadocs navigation, metadata, sitemap, search, and LLM-readable document routes.
