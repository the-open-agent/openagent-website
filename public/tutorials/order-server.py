"""Fictional, read-only order service for the OpenAgent MCP tutorial.

Requires Python 3.11+ and mcp==2.3.0.
Run: python order-server.py
Endpoint: http://127.0.0.1:8000/mcp
"""

from mcp.server import MCPServer

server = MCPServer("Tutorial order lookup")

ORDERS = {
    "ORD-1001": {"status": "shipped", "carrier": "Demo Express", "tracking": "DEMO-4821"},
    "ORD-1002": {"status": "processing", "carrier": None, "tracking": None},
}


@server.tool()
def lookup_order(order_id: str) -> dict:
    """Look up shipping status by order ID, such as ORD-1001.

    Use for order status or tracking questions. This reads fictional data;
    it cannot change orders, cancel shipments, or issue refunds.
    """
    order = ORDERS.get(order_id.upper())
    if order is None:
        return {"order_id": order_id, "found": False}
    return {"order_id": order_id.upper(), "found": True, **order}


if __name__ == "__main__":
    server.run(transport="streamable-http", host="127.0.0.1", port=8000)
